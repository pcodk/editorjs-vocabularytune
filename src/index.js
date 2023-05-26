/**
 * Build styles
 */
import "./../styles/index.pcss";
import tooltipIcon from "./assets/tooltip.svg";

/**
 * Import functions
 */
import * as Dom from "./utils/dom";
import { SelectionUtils } from "./utils/selection";
import { Utils } from "./utils/utils";

/**
 * @typedef {object} SearchItemData
 * @property {string} href - link target
 * @property {string} Name - link name
 * @property {string} Description - link description
 */

const DICTIONARY = {
  pasteOrSearch: "Paste or search",
  pasteALink: "Paste a link",
  searchRequestError: "Cannot process search request because of",
  invalidServerData: "Server responded with invalid data",
  invalidUrl: "URL is invalid",
};

/**
 * Timeout before search in ms after key pressed
 *
 * @type {number}
 */
const DEBOUNCE_TIMEOUT = 250;

/**
 * @typedef {string} NavDirection
 */
/**
 * Enum specifying keyboard navigation directions
 *
 * @enum {NavDirection}
 */
const NavDirection = {
  Next: "Next",
  Previous: "Previous",
};

/**
 * Vocabulary Autocomplete Tool for EditorJS
 */
export default class VocabularyAutocomplete {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  static get isInline() {
    return true;
  }

  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      span: true,
    };
  }

  /**
   * Title for hover-tooltip
   *
   * @returns {string}
   */
  static get title() {
    return "Vocabulary Autocomplete";
  }

  /**
   * Set a shortcut
   *
   * @returns {string}
   */
  get shortcut() {
    return "CMD+G";
  }

  /**
   * @private
   *
   * @returns {object<string, string>} — keys and class names
   */
  static get CSS() {
    return {
      iconWrapper: "ce-vocabulary-autocomplete__icon-wrapper",

      hidden: "ce-vocabulary-autocomplete__hidden",

      actionsWrapper: "ce-vocabulary-autocomplete__actions-wrapper",

      field: "ce-vocabulary-autocomplete__field",
      fieldLoading: "ce-vocabulary-autocomplete__field--loading",
      fieldInput: "ce-vocabulary-autocomplete__field-input",

      foundItems: "ce-vocabulary-autocomplete__items",

      searchItem: "ce-vocabulary-autocomplete__search-item",
      searchItemSelected: "ce-vocabulary-autocomplete__search-item--selected",
      searchItemName: "ce-vocabulary-autocomplete__search-item-name",
      searchItemDescription:
        "ce-vocabulary-autocomplete__search-item-description",

      linkDataWrapper: "ce-vocabulary-autocomplete__link-data-wrapper",
      linkDataTitleWrapper:
        "ce-vocabulary-autocomplete__link-data-title-wrapper",
      linkDataName: "ce-vocabulary-autocomplete__link-data-name",
      linkDataDescription: "ce-vocabulary-autocomplete__link-data-description",
      linkDataURL: "ce-vocabulary-autocomplete__link-data-url",
    };
  }

  /**
   * Initialize basic data
   *
   * @param {object} options - tools constructor params
   * @param {object} options.config — initial config for the tool
   * @param {object} options.api — methods from Core
   */
  constructor({ config, api }) {
    /**
     * Essential tools
     */
    this.api = api;
    this.config = config || {};
    this.selection = new SelectionUtils();

    /**
     * Config params
     */
    this.searchEndpointUrl = this.config.endpoint;
    this.searchQueryParam = this.config.queryParam;

    /**
     * Tool's nodes list
     *
     * toolButtons
     *   |- toolButtonLink
     *   |- toolButtonUnlink
     *
     * actionsWrapper
     *   |- inputWrapper
     *   |    |- inputField
     *   |    |- loader
     *   |
     *   |- searchResults
     *   |    |- searchItemWrapper
     *   |    |    |- searchItemName
     *   |    |    |- searchItemDescription
     *   |    |
     *   |    |- ...
     *   |
     *   |- linkDataWrapper
     *        |- URL
     *        |- Name
     *        |- Description
     */
    this.nodes = {
      toolButtons: null,
      toolButtonLink: null,
      toolButtonUnlink: null,

      actionsWrapper: null,
      inputWrapper: null,
      inputField: null,

      searchResults: null,

      linkDataWrapper: null,
      linkDataTitleWrapper: null,
      linkDataName: null,
      linkDataDescription: null,
      linkDataURL: null,
    };

    /**
     * Define tag name for a link element
     */
    this.tagName = "SPAN";

    /**
     * Key codes
     */
    this.KEYS = {
      ENTER: 13,
      UP: 38,
      DOWN: 40,
    };

    /**
     * Define debounce timer
     */
    this.typingTimer = null;
  }

  /**
   * Create element with buttons for toolbar
   *
   * @returns {HTMLDivElement}
   */
  render() {
    /**
     * Create wrapper for buttons
     *
     * @type {HTMLButtonElement}
     */
    this.nodes.toolButtons = Dom.make(
      "button",
      this.api.styles.inlineToolButton
    );

    /**
     * Create Link button
     *
     * @type {HTMLSpanElement}
     */
    this.nodes.toolButtonLink = Dom.make(
      "span",
      VocabularyAutocomplete.CSS.iconWrapper,
      {
        innerHTML: tooltipIcon,
      }
    );
    this.nodes.toolButtons.appendChild(this.nodes.toolButtonLink);

    /**
     * Create Unlink button
     *
     * @type {HTMLSpanElement}
     */
    this.nodes.toolButtonUnlink = Dom.make(
      "span",
      VocabularyAutocomplete.CSS.iconWrapper,
      {
        innerHTML: tooltipIcon,
      }
    );
    this.nodes.toolButtons.appendChild(this.nodes.toolButtonUnlink);
    this.toggleVisibility(this.nodes.toolButtonUnlink, false);

    return this.nodes.toolButtons;
  }

  /**
   * Render actions element
   *
   * @returns {HTMLDivElement}
   */
  renderActions() {
    /**
     * Render actions wrapper
     *
     * @type {HTMLDivElement}
     */
    this.nodes.actionsWrapper = Dom.make("div", [
      VocabularyAutocomplete.CSS.actionsWrapper,
    ]);
    this.toggleVisibility(this.nodes.actionsWrapper, false);

    /**
     * Render input field
     *
     * @type {HTMLDivElement}
     */
    this.nodes.inputWrapper = Dom.make("div", VocabularyAutocomplete.CSS.field);
    this.nodes.inputField = Dom.make(
      "input",
      VocabularyAutocomplete.CSS.fieldInput,
      {
        placeholder: this.api.i18n.t(
          this.isServerEnabled
            ? DICTIONARY.pasteOrSearch
            : DICTIONARY.pasteALink
        ),
      }
    );

    this.nodes.inputWrapper.appendChild(this.nodes.inputField);
    this.toggleVisibility(this.nodes.inputWrapper, false);

    /**
     * Render search results
     *
     * @type {HTMLDivElement}
     */
    this.nodes.searchResults = Dom.make(
      "div",
      VocabularyAutocomplete.CSS.foundItems
    );
    /**
     * To improve UX we need to remove any 'selected' classes from search results
     */
    this.nodes.searchResults.addEventListener("mouseenter", () => {
      const searchItems = this.getSearchItems();

      searchItems.forEach((item) => {
        item.classList.remove(VocabularyAutocomplete.CSS.searchItemSelected);
      });
    });
    /**
     * Enable search results click listener
     */
    this.nodes.searchResults.addEventListener("click", (event) => {
      const closestSearchItem = event.target.closest(
        `.${VocabularyAutocomplete.CSS.searchItem}`
      );
      /**
       * If click target search item is missing then do nothing
       */
      if (!closestSearchItem) {
        return;
      }

      /**
       * Preventing events that will be able to happen
       */
      event.preventDefault();
      event.stopPropagation();

      this.searchItemPressed(closestSearchItem);
    });

    /**
     * Listen to pressed enter key or up and down arrows
     */
    this.nodes.inputField.addEventListener(
      "keydown",
      this.fieldKeydownHandler.bind(this)
    );

    /**
     * Listen to input
     */
    this.nodes.inputField.addEventListener(
      "input",
      this.fieldInputHandler.bind(this)
    );

    /**
     * Render link data block
     */
    this.nodes.linkDataWrapper = Dom.make(
      "div",
      VocabularyAutocomplete.CSS.linkDataWrapper
    );
    this.toggleVisibility(this.nodes.linkDataWrapper, false);

    this.nodes.linkDataTitleWrapper = Dom.make(
      "div",
      VocabularyAutocomplete.CSS.linkDataTitleWrapper
    );
    this.nodes.linkDataWrapper.appendChild(this.nodes.linkDataTitleWrapper);
    this.toggleVisibility(this.nodes.linkDataTitleWrapper, false);

    this.nodes.linkDataName = Dom.make(
      "div",
      VocabularyAutocomplete.CSS.linkDataName
    );
    this.nodes.linkDataTitleWrapper.appendChild(this.nodes.linkDataName);
    this.nodes.linkDataDescription = Dom.make(
      "div",
      VocabularyAutocomplete.CSS.linkDataDescription
    );
    this.nodes.linkDataTitleWrapper.appendChild(this.nodes.linkDataDescription);

    this.nodes.linkDataURL = Dom.make(
      "SPAN",
      VocabularyAutocomplete.CSS.linkDataURL
    );
    this.nodes.linkDataWrapper.appendChild(this.nodes.linkDataURL);

    /**
     * Compose actions block
     */
    this.nodes.actionsWrapper.appendChild(this.nodes.inputWrapper);
    this.nodes.actionsWrapper.appendChild(this.nodes.searchResults);
    this.nodes.actionsWrapper.appendChild(this.nodes.linkDataWrapper);

    return this.nodes.actionsWrapper;
  }

  /**
   * Process keydown events to detect arrow keys or enter pressed
   *
   * @param {KeyboardEvent} event — keydown event
   * @returns {void}
   */
  fieldKeydownHandler(event) {
    const isArrowKey = [this.KEYS.UP, this.KEYS.DOWN].includes(event.keyCode);
    const isEnterKey = this.KEYS.ENTER === event.keyCode;

    /**
     * If key is not an arrow or enter
     */
    if (!isArrowKey && !isEnterKey) {
      return;
    }

    /**
     * Preventing events that will be able to happen
     */
    event.preventDefault();
    event.stopPropagation();

    /**
     * Choose handler
     */
    switch (true) {
      /**
       * Handle arrow keys
       */
      case isArrowKey: {
        const direction =
          event.keyCode === this.KEYS.DOWN
            ? NavDirection.Next
            : NavDirection.Previous;

        this.navigate(direction);
        break;
      }

      /**
       * Handle Enter key
       */
      case isEnterKey:
        this.processEnterKeyPressed();
        break;
    }
  }

  /**
   * Input event listener for a input field
   *
   * @param {KeyboardEvent} event — input event
   * @returns {void}
   */
  fieldInputHandler(event) {
    /**
     * Stop debounce timer
     */
    clearTimeout(this.typingTimer);

    /**
     * Get input value
     */
    const searchString = event.target.value;

    /**
     * If search string is empty then clear search list
     */
    if (!searchString || !searchString.trim()) {
      this.clearSearchList();

      return;
    }

    /**
     * If a valid link was entered then show only one list item with a link href.
     */
    if (Utils.isUrl(searchString)) {
      this.generateSearchList([
        {
          href: searchString,
        },
      ]);

      return;
    }

    /**
     * If no server endpoint then do nothing
     */
    if (!this.isServerEnabled) {
      return;
    }

    /**
     * Define a new timer
     */
    this.typingTimer = setTimeout(async () => {
      /**
       * Show the loader during request
       */
      this.toggleLoadingState(true);
      try {
        const searchDataItems = await this.searchRequest(searchString);
        /**
         * Generate list
         */
        this.generateSearchList(searchDataItems);
      } catch (e) {
        console.warn("VocabularyAutocomplete", e);
      }

      this.toggleLoadingState(false);
    }, DEBOUNCE_TIMEOUT);
  }

  /**
   * Hides / shows loader
   *
   * @param {boolean} state - true to show
   * @returns {void}
   */
  toggleLoadingState(state) {
    this.nodes.inputWrapper.classList.toggle(
      VocabularyAutocomplete.CSS.fieldLoading,
      state
    );
  }

  /**
   * Navigate found items
   *
   * @param {NavDirection} direction - next or previous
   * @returns {void}
   */
  navigate(direction) {
    /**
     * Getting search items
     */
    const data = this.getSearchItems();
    const selectedItem = this.getSelectedItem();

    if (!data.length) {
      return;
    }

    /**
     * Next: index + 1
     * Prev: index - 1
     */
    const indexDelta = direction === NavDirection.Next ? 1 : -1;
    const selectedItemIndex = selectedItem ? data.indexOf(selectedItem) : -1;
    let nextIndex = selectedItemIndex + indexDelta;

    if (nextIndex > data.length - 1) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = data.length - 1;
    }

    if (selectedItem) {
      selectedItem.classList.remove(
        VocabularyAutocomplete.CSS.searchItemSelected
      );
    }

    data[nextIndex].classList.add(
      VocabularyAutocomplete.CSS.searchItemSelected
    );
  }

  /**
   * Get search items
   *
   * @returns {Element[]}
   */
  getSearchItems() {
    const nodesList = this.nodes.searchResults.querySelectorAll(
      `.${VocabularyAutocomplete.CSS.searchItem}`
    );

    return Array.from(nodesList);
  }

  /**
   * Find selected item
   *
   * @returns {Element|null}
   */
  getSelectedItem() {
    return this.nodes.searchResults.querySelector(
      `.${VocabularyAutocomplete.CSS.searchItemSelected}`
    );
  }

  /**
   * Remove search result elements
   *
   * @returns {void}
   */
  clearSearchList() {
    this.nodes.searchResults.innerHTML = "";
  }

  /**
   * Fill up a search list results by data
   *
   * @param {SearchItemData[]} items — items to be shown
   * @returns {void}
   */
  generateSearchList(items = []) {
    /**
     * Clear list first
     */
    this.clearSearchList();

    /**
     * If items data is not an array
     */
    if (!Utils.isArray(items)) {
      console.warn(DICTIONARY.invalidServerData);
      return;
    }

    /**
     * If no items returned
     */
    if (items.length === 0) {
      return;
    }

    /**
     * Fill up search list by new elements
     */
    items.forEach((item) => {
      const searchItem = Dom.make("div", [
        VocabularyAutocomplete.CSS.searchItem,
      ]);

      /**
       * Create a name for a link
       */
      const searchItemName = Dom.make(
        "div",
        [VocabularyAutocomplete.CSS.searchItemName],
        {
          innerText: item.attributes.Name,
        }
      );

      searchItem.appendChild(searchItemName);

      /**
       * Create a description element
       */

      if (item.attributes.Description) {
        const searchItemDescription = Dom.make(
          "div",
          [VocabularyAutocomplete.CSS.searchItemDescription],
          {
            innerText: item.attributes.Description,
          }
        );

        searchItem.appendChild(searchItemDescription);
      }

      /**
       * Save all keys to item's dataset
       */
      Object.keys(item.attributes).forEach((key) => {
        searchItem.dataset[key] = item.attributes[key];
      });

      /**
       * Set Id
       */
      searchItem.dataset.id = item.id;
      searchItem.dataset.href = "https://www.google.com";

      this.nodes.searchResults.appendChild(searchItem);
    });
  }

  /**
   * Process 'press' event on the search item
   *
   * @param {Element} element - pressed item element
   * @returns {void}
   */
  searchItemPressed(element) {
    /**
     * If no useful dataset info was given then do nothing
     */
    if (!element.dataset || !element.dataset["id"]) {
      return;
    }

    /**
     * Restore origin selection
     */
    this.selection.restore();
    this.selection.removeFakeBackground();

    /**
     * Create a link by default browser's function
     */
    // document.execCommand('createLink', false, href);

    const selectedText = window.getSelection().toString();

    // Create a span element
    const span = document.createElement("span");

    span.textContent = selectedText;

    // Apply any desired styles to the span element
    span.style.borderBottom = "1px dotted #000";

    // Replace the selected text with the span element
    const range = window.getSelection().getRangeAt(0);

    range.deleteContents();
    range.insertNode(span);

    /**
     * Get this link element
     */

    /**
     * Fill up link element's dataset
     */
    Object.keys(element.dataset).forEach((key) => {
      if (key !== "id") {
        return;
      }
      // todo clean up here
      span.dataset[key] = element.dataset[key];
    });

    span.dataset.type = "vocabulary_element";

    /**
     * Collapse selection and close toolbar
     */
    this.selection.collapseToEnd();
    this.api.inlineToolbar.close();
  }

  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range — range to wrap with link
   * @returns {void}
   */
  surround(range) {
    if (!range) {
      return;
    }

    /**
     * Show actions wrapper
     */
    this.toggleVisibility(this.nodes.actionsWrapper, true);

    /**
     * Get result state after checkState() function
     * If tool button icon unlink is active then selected text is a link
     *
     * @type {boolean}
     */
    const isLinkSelected = this.nodes.toolButtonUnlink.classList.contains(
      this.api.styles.inlineToolButtonActive
    );

    /**
     * Create a fake selection
     */
    this.selection.setFakeBackground();
    this.selection.save();

    /**
     * Check if link is in the selection
     */
    if (!isLinkSelected) {
      /**
       * Show focused input field
       */
      this.toggleVisibility(this.nodes.inputWrapper, true);
      this.nodes.inputField.focus();
    } else {
      /**
       * Get the nearest link tag
       */
      const parentAnchor = this.selection.findParentTag("SPAN");
      /**
       * Expand selection
       */
      this.selection.expandToTag(parentAnchor);

      /**
       * Remove the SPAN
       */
      var textNode = document.createTextNode(parentAnchor.textContent);
      parentAnchor.parentNode.replaceChild(textNode, parentAnchor);

      /**
       * Remove fake selection and close toolbar
       */
      // this.selection.removeFakeBackground();
      this.api.inlineToolbar.close();
    }
  }

  /**
   * Check for a tool's state
   *
   * @param {Selection} selection — selection to be passed from Core
   * @returns {void}
   */
  async checkState(selection) {
    const text = selection.anchorNode;

    /**
     * Selection is empty
     */
    if (!text) {
      return;
    }

    /**
     * Find the nearest link tag
     */
    const parentA = this.selection.findParentTag(this.tagName);

    /**
     * If no link tag then do nothing
     */
    if (!parentA) {
      return;
    }

    this.toggleVisibility(this.nodes.actionsWrapper, true);
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer dc24508ca6d2463c78e3528c8e1b3da132e8267b838baa130c65324b4aa1483885c1bf02134fdfd5b2b7a552c4656ac2ec9e0048207ef12b93ef129d3f5e4bea87fde6407dde1f41dfc1c7edfbeab80b3f78d6420a9718907e6984161dfd41f852e74f31081e33573a55b9288263dc1be9f75dc88366a0160a7d1f6f2d7e43be"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      // todo
      const searchResponseRaw = await fetch(
        `${this.searchEndpointUrl}/${parentA.dataset.id}`,
        requestOptions
      );
      const { data } = await searchResponseRaw.json();

      /**
       * Fill up link data block
       */
      this.nodes.linkDataName.innerText = data.attributes.Name || "";
      this.nodes.linkDataDescription.innerText =
        data.attributes.Description || "";

      /**
       * If link has name or description then show title wrapper
       */
      if (data.attributes.Name || data.attributes.Description) {
        this.toggleVisibility(this.nodes.linkDataTitleWrapper, true);
      }

      /**
       * Show link data block
       */
      this.toggleVisibility(this.nodes.linkDataWrapper, true);

      /**
       * Show 'unlink' icon
       */
      this.toggleVisibility(this.nodes.toolButtonLink, false);
      this.toggleVisibility(this.nodes.toolButtonUnlink, true);
      this.nodes.toolButtonUnlink.classList.add(
        this.api.styles.inlineToolButtonActive
      );
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Show or hide target element
   *
   * @param {HTMLElement} element — target element
   * @param {boolean} isVisible — visibility state
   * @returns {void}
   */
  toggleVisibility(element, isVisible = true) {
    /**
     * If not "isVisible" then add "hidden" class
     */
    element.classList.toggle(VocabularyAutocomplete.CSS.hidden, !isVisible);
  }

  /**
   * Send search request
   *
   * @param {string} searchString - search string input
   *
   * @returns {Promise<SearchItemData[]>}
   */
  async searchRequest(searchString) {
    /**
     * Compose query string
     *
     * @type {string}
     */
    const queryString = new URLSearchParams({
      [this.searchQueryParam]: searchString,
    }).toString();

    try {
      /**
       * Get raw search data
       */

      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer dc24508ca6d2463c78e3528c8e1b3da132e8267b838baa130c65324b4aa1483885c1bf02134fdfd5b2b7a552c4656ac2ec9e0048207ef12b93ef129d3f5e4bea87fde6407dde1f41dfc1c7edfbeab80b3f78d6420a9718907e6984161dfd41f852e74f31081e33573a55b9288263dc1be9f75dc88366a0160a7d1f6f2d7e43be"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const searchResponseRaw = await fetch(
        `${this.searchEndpointUrl}?${queryString}`,
        requestOptions
      );

      /**
       * Get JSON decoded data
       */
      const searchResponse = await searchResponseRaw.json();

      if (searchResponse) {
        return searchResponse.data;
      } else {
        console.warn(
          'Vocabulary Autocomplete: invalid response format: "success: true" expected, but got %o. Response: %o',
          searchResponse.success,
          searchResponse
        );
      }
    } catch (e) {
      console.warn("VocabularyAutocomplete", e);
    }

    return [];
  }

  /**
   * Do we need to send requests to the server
   *
   * @returns {boolean}
   */
  isServerEnabled() {
    return !!this.searchEndpointUrl;
  }

  /**
   * Function called with Inline Toolbar closing
   *
   * @returns {void}
   */
  clear() {
    if (this.selection.isFakeBackgroundEnabled) {
      // if actions is broken by other selection We need to save new selection
      const currentSelection = new SelectionUtils();

      currentSelection.save();

      this.selection.restore();
      this.selection.removeFakeBackground();
      this.selection.clearSaved();

      // and recover new selection after removing fake background
      currentSelection.restore();
    }
  }
}
