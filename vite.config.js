import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],     // Configure Vite to use the React plugin
  build: {
    target: 'esnext',     // Specify the target environment for bundling
    outDir: 'dist',       // Specify the output directory for bundled files
    minify: false,        // Disable minification (no code optimization)
    sourcemap: true,      // Generate sourcemaps for debugging
    rollupOptions: {
      input: {
        main: 'src/main.js' // adjust this according to your entry file
      },
      output: {
        manualChunks: () => 'ignored' // This disables bundling
      }
    },
    server: {    
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000  
      // port: 3000, 
  },
  }
})
