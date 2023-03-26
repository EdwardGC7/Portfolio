import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://EdwardGC7.github.io/Portfolio/',
  server: {
    watch: {
        usePolling: true 
    }
}
})
