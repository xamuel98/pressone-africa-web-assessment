import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Setup proxy server to fix CORS
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jsonserve.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` // just variables loaded globally
          @import "./src/assets/scss/_variables.scss";
          @import "./src/assets/scss/_mixins.scss";
          @import "./src/assets/scss/_colors.scss";
          @import "./src/assets/scss/_fonts.scss";
          @import "./src/assets/scss/_breakpoints.scss";
        `
      }
    }
  }
})
