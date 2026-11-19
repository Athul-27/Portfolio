import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the built site work on GitHub Pages for both
// user.github.io and user.github.io/<repo> without hardcoding a path.
export default defineConfig({
  plugins: [react()],
  base: './',
})
