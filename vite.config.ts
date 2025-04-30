// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  /** каталог, куда кладётся сборка */
  const OUT_DIR = 'docs';

  return {
    plugins: [
      vue(),

      /* ──────────────────────────────────────────────────────────────
         Плагин: после сборки копируем docs/index.html → docs/404.html
         (нужно для GitHub Pages, чтобы history-маршруты не давали 404)
      ────────────────────────────────────────────────────────────── */
      {
        name: 'copy-index-to-404',
        closeBundle() {
          const indexPath = path.resolve(__dirname, OUT_DIR, 'index.html');
          const notFoundPath = path.resolve(__dirname, OUT_DIR, '404.html');
          if (fs.existsSync(indexPath)) {
            fs.copyFileSync(indexPath, notFoundPath);
            console.log('👍  404.html создан из index.html');
          } else {
            console.warn('⚠️  index.html не найден — 404.html не создан');
          }
        },
      },
    ],

    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },

    /* базовый префикс (подкаталог GitHub Pages) */
    base: env.VITE_BASE_URL || '/9worlds/',

    build: {
      outDir: OUT_DIR,   // собираем в docs/
      emptyOutDir: true, // чистим перед сборкой
    },
  };
});
