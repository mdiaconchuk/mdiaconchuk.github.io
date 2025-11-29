import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  server: {
    port: 5173,
    strictPort: true,
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    }
  }
})
