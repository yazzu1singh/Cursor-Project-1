import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells the browser: "Look for assets relative to where index.html is"
  base: './', 
})