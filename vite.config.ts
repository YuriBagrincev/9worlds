import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig(({ mode }) => {
  // подгрузим переменные из .env[.mode]
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // Берём VITE_BASE_URL из .env, иначе используем базовый путь для GitHub Pages
    base: env.VITE_BASE_URL || '/9worlds/'
  }
})
