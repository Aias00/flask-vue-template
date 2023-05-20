import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 开启外部访问
    host: '0.0.0.0',
    // port: 3000,
    open: true,
    strictPort: true,
    https: false,
    // 配置代理
    proxy: {
      '^/api': {
        target: 'http://flask-vue-template-flask-1:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
