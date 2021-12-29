import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa'

const aliases = getAliases();
const preprocess = require('svelte-preprocess')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ preprocess: preprocess() }), VitePWA({
    includeAssets: ['favicon.png', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Dashbox',
      short_name: 'Db',
      description: 'rube-golberg-esk personal dashboard',
      theme_color: '#da532c',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })],
  publicDir: './assets/',
  build: {
    outDir: './public/'
  },
  resolve: {
    alias: aliases
  },
  optimizeDeps: { exclude: ["@roxi/routify", "@urql/svelte"] },
})
