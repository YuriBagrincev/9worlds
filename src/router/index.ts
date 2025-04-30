import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import RunesPage from '@/pages/RunesPage.vue'
import GodsPage from '@/pages/GodsPage.vue'
import DivinationPage from '@/pages/DivinationPage.vue'
import StorePage from '@/pages/StorePage.vue'  // <-- Новая страница "Магазин"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/runes', name: 'runes', component: RunesPage },
    { path: '/gods', name: 'gods', component: GodsPage },
    { path: '/divination', name: 'divination', component: DivinationPage },
    { path: '/store', name: 'store', component: StorePage } // <-- заменили мифы на магазин
  ]
})

export default router
