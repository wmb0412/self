import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/

const getPath = _path => path.resolve(__dirname, _path)
export default defineConfig({
  resolve: {
    alias: {
      "@": getPath('src'),
      "@pages": getPath('src/pages'),
      "@components": getPath('src/components'),
      "@layouts": getPath('src/layouts'),
      "@assets": getPath('src/assets'),
      "@utils": getPath('src/utils'),
      "@styles": getPath('src/styles'),
      "@request": getPath('src/request'),
      "@routes": getPath('src/routes'),
    }
  },
  plugins: [react()],
})
