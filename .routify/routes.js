
/**
 * @roxi/routify 2.18.4
 * File generated Wed Dec 29 2021 23:44:52 GMT-0500 (Eastern Standard Time)
 */

export const __version = "2.18.4"
export const __timestamp = "2021-12-30T04:44:52.445Z"

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
  "path": "pfesenmeier.github.io/dashboard"
}

export const {tree, routes} = buildClientTree(_tree)
