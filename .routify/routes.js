
/**
 * @roxi/routify 2.18.4
 * File generated Thu Dec 30 2021 00:31:43 GMT-0500 (Eastern Standard Time)
 */

export const __version = "2.18.4"
export const __timestamp = "2021-12-30T05:31:43.755Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

