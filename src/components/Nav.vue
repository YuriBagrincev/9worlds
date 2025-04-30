<template>
  <nav
    class="header__nav"
    role="navigation"
    aria-label="Основная навигация"
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
  >
    <ul class="header__list">
      <li class="header__items">
        <RouterLink
          to="/"
          class="header__link"
          aria-label="Главная"
          exact-active-class="header__link--active"
          itemprop="url"
        >
          Главная
        </RouterLink>
      </li>
      <li class="header__items">
        <RouterLink
          to="/divination"
          class="header__link"
          aria-label="Гадание"
          exact-active-class="header__link--active"
          itemprop="url"
        >
          Гадание
        </RouterLink>
      </li>
      <li class="header__items">
        <RouterLink
          to="/runes"
          class="header__link"
          aria-label="Руны"
          exact-active-class="header__link--active"
          itemprop="url"
        >
          Руны
        </RouterLink>
      </li>
      <li class="header__items">
        <RouterLink
          to="/gods"
          class="header__link"
          aria-label="Асы, Ваны и Ётуны"
          exact-active-class="header__link--active"
          itemprop="url"
        >
          Асы Ваны Ётуны
        </RouterLink>
      </li>
      <li class="header__items">
        <RouterLink
          to="/store"
          class="header__link"
          aria-label="Кузница"
          exact-active-class="header__link--active"
          itemprop="url"
        >
          Кузница
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "NavComponent",
  components: { RouterLink },
});
</script>

<style scoped>
.header__nav {
  background-color: #444;
  padding: 15px 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;     /* Firefox */
  -ms-overflow-style: none;  /* IE10+ */
}
.header__nav::-webkit-scrollbar {
  display: none;
}

.header__list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0 1rem;
  list-style: none;
  white-space: nowrap;
}

.header__items {
  flex: 0 0 auto;
}

.header__link {
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

/* Активная ссылка */
.header__link--active {
  color: gold;
  text-shadow: 0 0 5px gold;
}

.header__link:hover {
  color: gold;
  text-shadow: 0 0 5px gold;
}

/* Tablet (≤768px) */
@media (max-width: 768px) {
  .header__link {
    font-size: 22px;
  }
}

/* Mobile (≤480px) */
@media (max-width: 480px) {
  .header__link {
    font-size: 18px;
  }
}
</style>
