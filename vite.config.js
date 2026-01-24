import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  base: '/', 
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
      output: {
        manualChunks: {
          vendor: ['jquery'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore']
        }
      }
    }
  }, 
  publicDir: 'public'
}));