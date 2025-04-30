import { createApp } from 'vue'
import App from './App.vue'

// Импортируем роутер
import router from './router'

// Импортируем Pinia
import { createPinia } from 'pinia'

// Импортируем стили (глобально)
import '@/assets/normalize.css'
import '@/assets/style.css'
/* import '@/assets/media.css'  // если выделил медиа-запросы в отдельный файл */

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
