// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { linkweb, id } from './src/wii.js';

export default defineConfig({
  //CONFIGURACIÓN BASE (HTML comprimido para reducir el tamaño del documento y acelerar la primera carga) _____________
  site: linkweb,
  base: '/',
  compressHTML: true,

  //NAVEGACIÓN RÁPIDA (Prefetch inteligente al hacer hover para cargar la siguiente página en milisegundos) _____________
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: false,
  },

  //COMPILACIÓN ESTILOS E IMÁGENES (Inyección de CSS crítico y passthrough de imágenes para evitar fallos de renderizado) _____________
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    service: passthroughImageService(),
    domains: ['i.ibb.co', 'ibb.co']
  },

  //EXPERIMENTAL (Speculation Rules API para prerenderizar la página antes de dar clic y simular carga instantánea de 0ms) _____________
  experimental: {
    clientPrerender: true,
    queuedRendering: { enabled: true },
  },

  //CONFIGURACIÓN DE VITE Y BUNDLING (Compilación JS moderna esnext y división del SDK de Firebase para aprovechar caché persistente) _____________
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/firebase')) return 'vendor-firebase';
            if (id.includes('node_modules')) return 'vendor';
          }
        }
      }
    }
  },

  //INTEGRACIONES (Sitemap automatizado y modulepreload en caliente para descargar scripts de Layout/widev/wii en paralelo) _____________
  integrations: [
    sitemap({
      filter: (page) => ![
        '/admin', '/gestor', '/editor', '/usuarios', '/sistema',
        '/verificar', '/perfil', '/mensajes', '/notas', '/plan',
        '/nuevo', '/ser-editor'
      ].some(x => page.includes(x)),
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        const p = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const check = (arr) => arr.some(x => p.includes(x));
        const [pri, freq] = (p === '/' || p === `/${id}`) ? [1.0, 'daily']
          : check(['/blog', '/citas', '/musica', '/orar']) ? [0.9, 'daily']
          : [0.8, 'weekly'];
        return Object.assign(item, { priority: pri, changefreq: freq });
      }
    }),

    {
      name: 'copy-sitemap',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const f = new URL('sitemap-0.xml', dir), t = new URL('sitemap.xml', dir);
          if (fs.existsSync(f)) fs.copyFileSync(f, t);
        }
      }
    },

    {
      name: 'modulepreload-critical',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const distDir = fileURLToPath(dir);
          const astroDir = path.join(distDir, '_astro');
          if (!fs.existsSync(astroDir)) return;

          const criticalChunks = fs.readdirSync(astroDir).filter(f =>
            /^(widev|wii)\.[a-zA-Z0-9_-]+\.js$/.test(f)
          );
          if (!criticalChunks.length) return;

          const linkTags = criticalChunks
            .map(f => `  <link rel="modulepreload" href="/_astro/${f}" />`)
            .join('\n');

          const getHtml = (dir) => fs.readdirSync(dir, { withFileTypes: true })
            .flatMap(e => e.isDirectory()
              ? getHtml(path.join(dir, e.name))
              : e.name.endsWith('.html') ? [path.join(dir, e.name)] : []
            );

          for (const file of getHtml(distDir)) {
            const html = fs.readFileSync(file, 'utf-8');
            if (html.includes('modulepreload')) continue;
            const updated = html.replace('</head>', `${linkTags}\n</head>`);
            if (updated !== html) fs.writeFileSync(file, updated, 'utf-8');
          }
        }
      }
    }
  ]
});
