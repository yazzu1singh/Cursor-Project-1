import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This tells the browser: "Look inside the /Cursor-Project-1/ folder for my CSS/JS"
  base: '/Cursor-Project-1/', 
  plugins: [react()],
})
