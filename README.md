# editorjs-vocabularytune

A tune for editorjs - that allows to add vocabulary to a selected text.

This module is heavily based on `@editorjs/link-autocomplete`.  
This means that most of the code is directly from there, with a few changes that was made to support our strapi.

## To run

When working use: `yarn build:dev`.  
To run test server `yarn server` - however i would recommend using strapi directly

# Usage

```js
import VocabularyAutocomplete from "editorjs-vocabularytune";

const editor = EditorJS({
  tools: {
    // .....
    vocabulary: {
      class: VocabularyAutocomplete,
      config: {
        endpoint: "http://localhost:1337/api/vocabularies",
        queryParam: "filters[Name][$containsi]",
        // change this to the one from strapi api
        bearerToken: "dc240....and so on",
      },
    },
    // .....
  },
});
```

## strapi

Expected return from BE example:

```js
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "Name": "Dead",
                "Description": "Death is natural part of life.",
                "createdAt": "2023-05-25T07:14:28.313Z",
                "updatedAt": "2023-05-25T07:15:05.097Z",
                "publishedAt": "2023-05-25T07:15:05.087Z"
            }
        },
        {
            "id": 2,
            "attributes": {
                "Name": "Object",
                "Description": "An object looks like this: {bla: 'xd'}",
                "createdAt": "2023-05-25T07:15:30.760Z",
                "updatedAt": "2023-05-25T07:15:31.494Z",
                "publishedAt": "2023-05-25T07:15:31.486Z"
            }
        },
        {
            "id": 3,
            "attributes": {
                "Name": "Image",
                "Description": "An image looks like this",
                "createdAt": "2023-05-25T07:15:54.418Z",
                "updatedAt": "2023-05-25T07:15:55.166Z",
                "publishedAt": "2023-05-25T07:15:55.155Z"
            }
        }
    ],
 }
```
