<template>
  <footer
    class="footer"
    itemscope
    itemtype="https://schema.org/WPFooter"
  >
    <div class="container footer-container">
      <nav
        class="social-links"
        aria-label="Социальные сети"
      >
        <ul class="list-reset flex">
          <li>
            <a
              href="https://t.me/@Yurec_721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти в Telegram"
            >
              <img
                src="/img/telegram.svg"
                alt="Telegram"
                class="social-icon"
                loading="lazy"
              />
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/id542830907"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти в ВКонтакте"
            >
              <img
                src="/img/vk.svg"
                alt="ВКонтакте"
                class="social-icon"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </nav>

      <address class="footer-text" itemprop="copyright">
        &copy; {{ currentYear }} Путь 9 Миров. Все права защищены.
      </address>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.social-links {
  margin: 0;
  margin-bottom: 8px;
}

.social-links ul {
  display: flex;
  gap: 8px;
}

.social-links a {
  display: inline-block;
}

.social-icon {
  width: 34px;
  height: 34px;
  transition: filter 0.3s ease-in-out;
}

.social-icon:hover {
  filter: drop-shadow(0 0 8px gold);
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .social-icon {
    width: 30px;
    height: 30px;
  }
  .footer-text {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .footer-text {
    font-size: 0.8rem;
  }
}
</style>
