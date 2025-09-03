import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/alma-sagrada/', // ← nombre del repo
  plugins: [react()],
})