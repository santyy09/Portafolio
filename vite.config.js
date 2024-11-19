import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000
  },
  entry: './index.html',
  outDir: 'dist',
  output: {
    filename: 'bundle.js'
  },
  plugins: [react()]
})