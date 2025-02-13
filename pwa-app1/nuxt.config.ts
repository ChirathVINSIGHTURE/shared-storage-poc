import { defineNuxtConfig } from 'nuxt/config'
import { VitePWA } from 'vite-plugin-pwa'

export default defineNuxtConfig({
  modules: [], // Remove '@vite-pwa/nuxt' and use Vite plugin directly in `vite.plugins`
  
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'PWA App 1',
          short_name: 'PWA 1',
          description: 'PWA app 1 with a shared IndexedDB storage',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/api\.example\.com\/.*/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
                }
              }
            }
          ]
        }
      })
    ]
  },

  typescript: {
    strict: true // Optional: Enforce strict TypeScript settings
  },

  compatibilityDate: '2025-02-13' // Custom compatibility option (remove if not needed)
})
