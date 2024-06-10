import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: 'jseoun.pe.kr',
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'https://jseoun.pe.kr:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  }
})
