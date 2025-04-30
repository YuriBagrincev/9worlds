<template>
  <div class="app">
    <!-- Шапка -->
    <HeaderComponent />

    <!-- Навигация -->
    <NavComponent />

    <!-- Основная область (растягивается) -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Подвал -->
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/Header.vue'
import NavComponent    from '@/components/Nav.vue'
import FooterComponent from '@/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    NavComponent,
    FooterComponent
  }
})
</script>

<style>
/* Контейнер приложения растягивается на всю высоту */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Основная область забирает всё доступное место */
.main-content {
  flex: 1;
}
</style>
