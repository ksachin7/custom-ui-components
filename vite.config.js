import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin() // Configure Vite to use the React plugin
  ],
  build: {
    target: 'esnext', // Specify the target environment for bundling
    outDir: 'dist',   // Specify the output directory for bundled files
    minify: false,    // Disable minification (no code optimization)
    sourcemap: true,  // Generate sourcemaps for debugging
    chunkSizeWarningLimit: 1000, // Adjust this if needed
    // Use esbuild for bundling instead of Rollup
    esbuild: {
      jsxInject: `import React from 'react';` // Necessary for JSX to work without importing React in each file
    }
  },
  server: {
    open: true // Open browser automatically when server starts
  }
});
