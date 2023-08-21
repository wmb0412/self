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
      "@assets": getPath('src/assets'),
      "@utils": getPath('src/utils')
    }
  },
  plugins: [react()],
})
