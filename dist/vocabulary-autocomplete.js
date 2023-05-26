!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VocabularyAutocomplete=t():e.VocabularyAutocomplete=t()}(self,(function(){return(()=>{var e={384:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".ce-vocabulary-autocomplete__icon-wrapper svg {\n        display: block;\n    }\n    .ce-vocabulary-autocomplete__actions-wrapper {\n        border-top: 1px solid #E8E8EB;\n        width: 200px;\n    }\n    .ce-vocabulary-autocomplete__field {\n        position: relative;\n    }\n    .ce-vocabulary-autocomplete__field-input {\n            width: calc(100% - 12px);\n            margin: 6px;\n            padding: 7px 10px;\n            border-radius: 5px;\n            border: solid 1px #E8E8EB;\n            background-color: rgba(232, 232, 235, 0.49);\n            outline: none;\n            -webkit-appearance: none;\n            box-sizing: border-box;\n            font-size: 14px;\n            font-weight: 500;\n            letter-spacing: -0.15px;\n            font-family: inherit;\n        }\n    .ce-vocabulary-autocomplete__field-input::placeholder {\n                color: #7B7E89;\n            }\n    /**\n         * Loader created in DOM but hidden bu default\n         */\n    .ce-vocabulary-autocomplete__field::after {\n\n            content: '';\n            position: absolute;\n            right: 16px;\n            top: 50%;\n            margin-top: calc(14px / 2 * -1);\n\n            width: 14px;\n            height: 14px;\n            border: 2px solid rgba(29, 32, 43, 0.3);\n            border-top: 2px solid transparent;\n            border-radius: 50%;\n            opacity: 0;\n            will-change: transform, opacity;\n            box-sizing: border-box;\n        }\n    .ce-vocabulary-autocomplete__field--loading::after {\n            animation: ce-vocabulary--autocomplete__spin 1s linear infinite;\n            opacity: 1;\n        }\n    .ce-vocabulary-autocomplete__items {\n        margin: 0 6px;\n    }\n    .ce-vocabulary-autocomplete__search-item {\n        outline: none;\n        border: 0;\n        border-radius: 5px;\n        font-size: 14px;\n        padding: 7px 10px;\n        margin-bottom: 6px;\n        box-sizing: border-box;\n        cursor: pointer;\n    }\n    .ce-vocabulary-autocomplete__search-item:not(:last-of-type) {\n        }\n    .ce-vocabulary-autocomplete__search-item:hover, .ce-vocabulary-autocomplete__search-item--selected {\n            background-color: rgba(232, 232, 235, 0.49);\n        }\n    .ce-vocabulary-autocomplete__search-item-name {\n            font-size: 14px;\n            line-height: 16px;\n\n            overflow:hidden;\n            white-space:nowrap;\n            text-overflow: ellipsis;\n        }\n    .ce-vocabulary-autocomplete__search-item-description {\n            color: #7b7e89;\n\n            font-size: 12px;\n            line-height: 16px;\n            margin-top: 1px;\n\n            overflow:hidden;\n            white-space:nowrap;\n            text-overflow: ellipsis;\n        }\n    .ce-vocabulary-autocomplete__hidden {\n        display: none;\n    }\n    .ce-vocabulary-autocomplete__link-data-wrapper {\n            width: 200px;\n            outline: none;\n            border: 0;\n            border-radius: 4px;\n            font-size: 13px;\n            padding: 10px;\n            box-sizing: border-box;\n        }\n    .ce-vocabulary-autocomplete__link-data-title-wrapper {\n            margin-bottom: 10px;\n        }\n    .ce-vocabulary-autocomplete__link-data-name {\n            font-size: 14px;\n            line-height: 16px;\n\n            overflow:hidden;\n            white-space:nowrap;\n            text-overflow: ellipsis;\n        }\n    .ce-vocabulary-autocomplete__link-data-description {\n            color: #7b7e89;\n\n            font-size: 12px;\n            line-height: 16px;\n            margin-top: 1px;\n\n            overflow:hidden;\n            white-space:nowrap;\n            text-overflow: ellipsis;\n        }\n    .ce-vocabulary-autocomplete__link-data-url {\n            display: block;\n\n            overflow:hidden;\n            white-space:nowrap;\n            text-overflow: ellipsis;\n        }\n\n@keyframes ce-vocabulary--autocomplete__spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},125:e=>{e.exports='<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.66 1.3C13.45 1.29 13.24 1.28 13.03 1.27V0.789997C13.03 0.699997 12.95 0.619997 12.85 0.609997C12.58 0.589997 12.3 0.579997 12.03 0.579997V0.239997C12.03 0.149997 11.96 0.0799965 11.86 0.0599965C10.21 -0.130003 8.57 0.109997 7.11 0.749997L6.92 0.829997L6.73 0.749997C5.27 0.109997 3.62 -0.130003 1.98 0.0599965C1.88 0.0699965 1.81 0.149997 1.81 0.239997V0.579997C1.54 0.579997 1.26 0.589997 0.99 0.609997C0.89 0.609997 0.81 0.689997 0.81 0.789997V1.27C0.6 1.27 0.39 1.28 0.18 1.3C0.08 1.3 0 1.38 0 1.47V9.05C0 9.05 0.02 9.14 0.06 9.18C0.1 9.21 0.15 9.23 0.21 9.23C2.42 9.04 4.65 9.12 6.83 9.49H6.88C6.88 9.49 6.9 9.49 6.91 9.49C6.91 9.49 6.93 9.49 6.94 9.49H6.99C9.17 9.11 11.4 9.02 13.61 9.22C13.66 9.22 13.72 9.21 13.75 9.17C13.79 9.14 13.81 9.09 13.81 9.04V1.47C13.81 1.38 13.73 1.3 13.63 1.3H13.66ZM1.97 8.27C1.71 8.27 1.45 8.27 1.19 8.29V0.959997C1.39 0.949997 1.6 0.939997 1.8 0.939997V7.53C1.8 7.53 1.82 7.63 1.86 7.66C1.89 7.68 1.92 7.7 1.96 7.7C3.08 7.88 4.15 8.19 5.15 8.62C4.11 8.39 3.04 8.27 1.96 8.27H1.97ZM6.72 9L6.61 8.94C5.27 8.18 3.79 7.66 2.19 7.38V0.399997C3.69 0.259997 5.23 0.499997 6.56 1.07L6.72 1.14V9ZM7.11 9V1.14L7.27 1.07C8.6 0.489997 10.14 0.249997 11.64 0.399997V7.38C10.04 7.66 8.56 8.18 7.22 8.94L7.11 9ZM12.64 8.29C11.3 8.22 9.96 8.33 8.68 8.62C9.68 8.19 10.74 7.88 11.86 7.7C11.9 7.7 11.94 7.68 11.96 7.65C12 7.62 12.02 7.57 12.02 7.52V0.939997C12.22 0.939997 12.43 0.939997 12.63 0.959997V8.3L12.64 8.29Z" fill="#1C1C1C"/>\n</svg>\n'},379:(e,t,n)=>{"use strict";var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function r(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],o=0;o<e.length;o++){var s=e[o],l=t.base?s[0]+t.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=r(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:m(p,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function p(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,g=0;function m(e,t){var n,i,o;if(t.singleton){var a=g++;n=h||(h=l(t)),i=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=l(t),i=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=r(n[i]);a[o].references--}for(var l=s(e,t),c=0;c<n.length;c++){var d=r(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=l}}}}},t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";n.d(i,{default:()=>p});var e=n(379),t=n.n(e),o=n(384);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=n(125),r=n.n(a);class s{static isNumber(e){return"number"==typeof e}static isArray(e){return Array.isArray(e)}static isUrl(e){return/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(e)}}function l(e,t=null,n={}){const i=document.createElement(e);Array.isArray(t)?i.classList.add(...t):t&&i.classList.add(t);for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(i[e]=n[e]);return i}function c(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}class d{constructor(){this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}static get anchorNode(){const e=window.getSelection();return e?e.anchorNode:null}static get anchorElement(){const e=window.getSelection();if(!e)return null;const t=e.anchorNode;return t?(n=t,!s.isNumber(n)&&n&&n.nodeType&&n.nodeType===Node.ELEMENT_NODE?t:t.parentElement):null;var n}static get anchorOffset(){const e=window.getSelection();return e?e.anchorOffset:null}static get isCollapsed(){const e=window.getSelection();return e?e.isCollapsed:null}static get isSelectionExists(){return!!d.get().anchorNode}static get range(){const e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}static get rect(){let e,t=document.selection,n={x:0,y:0,width:0,height:0};if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n;if(!window.getSelection)return console.warn("Method window.getSelection is not supported"),n;if(t=window.getSelection(),null===t.rangeCount||isNaN(t.rangeCount))return console.warn("Method SelectionUtils.rangeCount is not supported"),n;if(0===t.rangeCount)return n;if(e=t.getRangeAt(0).cloneRange(),e.getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){const t=document.createElement("span");if(t.getBoundingClientRect){t.appendChild(document.createTextNode("​")),e.insertNode(t),n=t.getBoundingClientRect();const i=t.parentNode;i.removeChild(t),i.normalize()}}return n}static get text(){return window.getSelection?window.getSelection().toString():""}static get(){return window.getSelection()}static setCursor(e,t=0){const n=document.createRange(),i=window.getSelection();if(c(e)){if(!function(e){let t=!0;if(c(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t="true"===e.contentEditable;return t}(e))return;return e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()}return n.setStart(e,t),n.setEnd(e,t),i.removeAllRanges(),i.addRange(n),n.getBoundingClientRect()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=d.range}restore(){if(!this.savedSelectionRange)return;const e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}findParentTag(e,t,n=10){const i=window.getSelection();let o=null;return i&&i.anchorNode&&i.focusNode?([i.anchorNode,i.focusNode].forEach((i=>{let a=n;for(;a>0&&i.parentNode&&(i.tagName!==e||(o=i,t&&i.classList&&!i.classList.contains(t)&&(o=null),!o));)i=i.parentNode,a--})),o):null}expandToTag(e){const t=window.getSelection();t.removeAllRanges();const n=document.createRange();n.selectNodeContents(e),t.addRange(n)}}const u="Next";class p{static get isInline(){return!0}static get sanitize(){return{span:!0}}static get title(){return"Vocabulary Autocomplete"}get shortcut(){return"CMD+G"}static get CSS(){return{iconWrapper:"ce-vocabulary-autocomplete__icon-wrapper",hidden:"ce-vocabulary-autocomplete__hidden",actionsWrapper:"ce-vocabulary-autocomplete__actions-wrapper",field:"ce-vocabulary-autocomplete__field",fieldLoading:"ce-vocabulary-autocomplete__field--loading",fieldInput:"ce-vocabulary-autocomplete__field-input",foundItems:"ce-vocabulary-autocomplete__items",searchItem:"ce-vocabulary-autocomplete__search-item",searchItemSelected:"ce-vocabulary-autocomplete__search-item--selected",searchItemName:"ce-vocabulary-autocomplete__search-item-name",searchItemDescription:"ce-vocabulary-autocomplete__search-item-description",linkDataWrapper:"ce-vocabulary-autocomplete__link-data-wrapper",linkDataTitleWrapper:"ce-vocabulary-autocomplete__link-data-title-wrapper",linkDataName:"ce-vocabulary-autocomplete__link-data-name",linkDataDescription:"ce-vocabulary-autocomplete__link-data-description",linkDataURL:"ce-vocabulary-autocomplete__link-data-url"}}constructor({config:e,api:t}){this.api=t,this.config=e||{},this.selection=new d,this.searchEndpointUrl=this.config.endpoint,this.searchQueryParam=this.config.queryParam,this.searchBearer=this.config.bearerToken||"",this.nodes={toolButtons:null,toolButtonLink:null,toolButtonUnlink:null,actionsWrapper:null,inputWrapper:null,inputField:null,searchResults:null,linkDataWrapper:null,linkDataTitleWrapper:null,linkDataName:null,linkDataDescription:null,linkDataURL:null},this.tagName="SPAN",this.KEYS={ENTER:13,UP:38,DOWN:40},this.typingTimer=null}render(){return this.nodes.toolButtons=l("button",this.api.styles.inlineToolButton),this.nodes.toolButtonLink=l("span",p.CSS.iconWrapper,{innerHTML:r()}),this.nodes.toolButtons.appendChild(this.nodes.toolButtonLink),this.nodes.toolButtonUnlink=l("span",p.CSS.iconWrapper,{innerHTML:r()}),this.nodes.toolButtons.appendChild(this.nodes.toolButtonUnlink),this.toggleVisibility(this.nodes.toolButtonUnlink,!1),this.nodes.toolButtons}renderActions(){return this.nodes.actionsWrapper=l("div",[p.CSS.actionsWrapper]),this.toggleVisibility(this.nodes.actionsWrapper,!1),this.nodes.inputWrapper=l("div",p.CSS.field),this.nodes.inputField=l("input",p.CSS.fieldInput,{placeholder:this.api.i18n.t(this.isServerEnabled?"Paste or search":"Paste a link")}),this.nodes.inputWrapper.appendChild(this.nodes.inputField),this.toggleVisibility(this.nodes.inputWrapper,!1),this.nodes.searchResults=l("div",p.CSS.foundItems),this.nodes.searchResults.addEventListener("mouseenter",(()=>{this.getSearchItems().forEach((e=>{e.classList.remove(p.CSS.searchItemSelected)}))})),this.nodes.searchResults.addEventListener("click",(e=>{const t=e.target.closest(`.${p.CSS.searchItem}`);t&&(e.preventDefault(),e.stopPropagation(),this.searchItemPressed(t))})),this.nodes.inputField.addEventListener("keydown",this.fieldKeydownHandler.bind(this)),this.nodes.inputField.addEventListener("input",this.fieldInputHandler.bind(this)),this.nodes.linkDataWrapper=l("div",p.CSS.linkDataWrapper),this.toggleVisibility(this.nodes.linkDataWrapper,!1),this.nodes.linkDataTitleWrapper=l("div",p.CSS.linkDataTitleWrapper),this.nodes.linkDataWrapper.appendChild(this.nodes.linkDataTitleWrapper),this.toggleVisibility(this.nodes.linkDataTitleWrapper,!1),this.nodes.linkDataName=l("div",p.CSS.linkDataName),this.nodes.linkDataTitleWrapper.appendChild(this.nodes.linkDataName),this.nodes.linkDataDescription=l("div",p.CSS.linkDataDescription),this.nodes.linkDataTitleWrapper.appendChild(this.nodes.linkDataDescription),this.nodes.linkDataURL=l("SPAN",p.CSS.linkDataURL),this.nodes.linkDataWrapper.appendChild(this.nodes.linkDataURL),this.nodes.actionsWrapper.appendChild(this.nodes.inputWrapper),this.nodes.actionsWrapper.appendChild(this.nodes.searchResults),this.nodes.actionsWrapper.appendChild(this.nodes.linkDataWrapper),this.nodes.actionsWrapper}fieldKeydownHandler(e){const t=[this.KEYS.UP,this.KEYS.DOWN].includes(e.keyCode),n=this.KEYS.ENTER===e.keyCode;if(t||n)switch(e.preventDefault(),e.stopPropagation(),!0){case t:{const t=e.keyCode===this.KEYS.DOWN?u:"Previous";this.navigate(t);break}case n:this.processEnterKeyPressed()}}processEnterKeyPressed(){const e=this.getSelectedItem();if(e)return void this.searchItemPressed(e);const t=this.getSearchItems()[0];this.searchItemPressed(t)}fieldInputHandler(e){clearTimeout(this.typingTimer);const t=e.target.value;t&&t.trim()?s.isUrl(t)?this.generateSearchList([{href:t}]):this.isServerEnabled&&(this.typingTimer=setTimeout((async()=>{this.toggleLoadingState(!0);try{const e=await this.searchRequest(t);this.generateSearchList(e)}catch(e){console.warn("VocabularyAutocomplete",e)}this.toggleLoadingState(!1)}),250)):this.clearSearchList()}toggleLoadingState(e){this.nodes.inputWrapper.classList.toggle(p.CSS.fieldLoading,e)}navigate(e){const t=this.getSearchItems(),n=this.getSelectedItem();if(!t.length)return;const i=e===u?1:-1;let o=(n?t.indexOf(n):-1)+i;o>t.length-1?o=0:o<0&&(o=t.length-1),n&&n.classList.remove(p.CSS.searchItemSelected),t[o].classList.add(p.CSS.searchItemSelected)}getSearchItems(){const e=this.nodes.searchResults.querySelectorAll(`.${p.CSS.searchItem}`);return Array.from(e)}getSelectedItem(){return this.nodes.searchResults.querySelector(`.${p.CSS.searchItemSelected}`)}clearSearchList(){this.nodes.searchResults.innerHTML=""}generateSearchList(e=[]){this.clearSearchList(),s.isArray(e)?0!==e.length&&e.forEach((e=>{const t=l("div",[p.CSS.searchItem]),n=l("div",[p.CSS.searchItemName],{innerText:e.attributes.Name});if(t.appendChild(n),e.attributes.Description){const n=l("div",[p.CSS.searchItemDescription],{innerText:e.attributes.Description});t.appendChild(n)}Object.keys(e.attributes).forEach((n=>{t.dataset[n]=e.attributes[n]})),t.dataset.id=e.id,t.dataset.href="https://www.google.com",this.nodes.searchResults.appendChild(t)})):console.warn("Server responded with invalid data")}searchItemPressed(e){if(!e.dataset||!e.dataset.id)return;this.selection.restore(),this.selection.removeFakeBackground();const t=window.getSelection().toString(),n=document.createElement("span");n.textContent=t,n.style.borderBottom="1px dotted #000";const i=window.getSelection().getRangeAt(0);i.deleteContents(),i.insertNode(n),Object.keys(e.dataset).forEach((t=>{"id"===t&&(n.dataset[t]=e.dataset[t])})),n.dataset.type="vocabulary_element",this.selection.collapseToEnd(),this.api.inlineToolbar.close()}surround(e){if(!e)return;this.toggleVisibility(this.nodes.actionsWrapper,!0);const t=this.nodes.toolButtonUnlink.classList.contains(this.api.styles.inlineToolButtonActive);if(this.selection.setFakeBackground(),this.selection.save(),t){const e=this.selection.findParentTag("SPAN");this.selection.expandToTag(e);const t=document.createTextNode(e.textContent);e.parentNode.replaceChild(t,e),this.api.inlineToolbar.close()}else this.toggleVisibility(this.nodes.inputWrapper,!0),this.nodes.inputField.focus()}async checkState(e){if(!e.anchorNode)return;const t=this.selection.findParentTag(this.tagName);if(t){this.toggleVisibility(this.nodes.actionsWrapper,!0);try{const e=new Headers;e.append("Authorization",`Bearer ${this.searchBearer}`);const n={method:"GET",headers:e,redirect:"follow"},i=await fetch(`${this.searchEndpointUrl}/${t.dataset.id}`,n),{data:o}=await i.json();this.nodes.linkDataName.innerText=o.attributes.Name||"",this.nodes.linkDataDescription.innerText=o.attributes.Description||"",(o.attributes.Name||o.attributes.Description)&&this.toggleVisibility(this.nodes.linkDataTitleWrapper,!0),this.toggleVisibility(this.nodes.linkDataWrapper,!0),this.toggleVisibility(this.nodes.toolButtonLink,!1),this.toggleVisibility(this.nodes.toolButtonUnlink,!0),this.nodes.toolButtonUnlink.classList.add(this.api.styles.inlineToolButtonActive)}catch(e){console.warn(e)}}}toggleVisibility(e,t=!0){e.classList.toggle(p.CSS.hidden,!t)}async searchRequest(e){const t=new URLSearchParams({[this.searchQueryParam]:e}).toString();try{const e=new Headers;e.append("Authorization",`Bearer ${this.searchBearer}`);const n={method:"GET",headers:e,redirect:"follow"},i=await fetch(`${this.searchEndpointUrl}?${t}`,n),o=await i.json();if(o)return o.data;console.warn('Vocabulary Autocomplete: invalid response format: "success: true" expected, but got %o. Response: %o',o.success,o)}catch(e){console.warn("VocabularyAutocomplete",e)}return[]}isServerEnabled(){return!!this.searchEndpointUrl}clear(){if(this.selection.isFakeBackgroundEnabled){const e=new d;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),this.selection.clearSaved(),e.restore()}}}})(),i.default})()}));