import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',       // Set source directory
  build: {
    outDir: '../dist', // Output to root's 'dist' folder
    emptyOutDir: true
  }
});