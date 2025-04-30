<template>
  <header
    class="header"
    itemscope
    itemtype="https://schema.org/WPHeader"
  >
    <!-- Skip-link для улучшенной доступности -->
    <a href="#main-content" class="skip-link">Перейти к содержимому</a>

    <div class="container header__container">
      <!-- Логотип + название сайта -->
      <div
        class="logo-box"
        itemscope
        itemtype="https://schema.org/Organization"
      >
        <a
          href="/"
          aria-label="Перейти на главную"
        >
          <img
            src="/img/favicon.png"
            alt="Логотип Путь 9 Миров"
            class="logo"
            itemprop="logo"
            loading="eager"
          />
          <h1
            class="site-title"
            itemprop="name"
          >
            Путь 9 Миров
          </h1>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style scoped>
.header {
  background-color: #666;
  color: #fff;
  padding: 10px 40px;
}

.header__container {
  display: flex;
  align-items: center;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Ссылка-обёртка для логотипа и заголовка */
.logo-box > a {
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: inherit;
}

.logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.site-title {
  margin: 0;
  font-size: 36px;
}

/* Tablet (≤768px) */
@media (max-width: 768px) {
  .header {
    padding: 8px 20px;
  }
  .logo {
    width: 35px;
    height: 35px;
  }
  .site-title {
    font-size: 28px;
  }
}

/* Mobile (≤480px) */
@media (max-width: 480px) {
  .header {
    padding: 6px 10px;
  }
  .logo {
    width: 30px;
    height: 30px;
  }
  .site-title {
    font-size: 24px;
  }
}
</style>
