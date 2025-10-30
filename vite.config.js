import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      devOptions:{
        enabled:true,
      },
      injectRegister:"auto",
      includeAssets: ['vite.svg'],

      manifest: {
        name: 'React PWA',
        short_name: 'ReactPWA',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
        ],
      },
    }),
  ],
})
