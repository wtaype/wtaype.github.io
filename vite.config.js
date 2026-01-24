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
      },
      plugins: [{
        name: 'minify-html',
        generateBundle(_, b) {
          for (const f in b) {
            if (f.endsWith('.html') && b[f].type === 'asset') {
              b[f].source = b[f].source.replace(/\n\s*/g, '').replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').replace(/<!--.*?-->/g, '').trim();
            }
          }
        }
      }]
    }
  }, 
  publicDir: 'public'
}));