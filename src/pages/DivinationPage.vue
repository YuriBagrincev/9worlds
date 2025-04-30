<template>
  <section class="divination container">
    <!-- 1. История гаданий -->
    <div class="history-section">
      <h2>История гадания на рунах</h2>
      <p>
        Изначально существовало всего несколько
        <strong>традиционных способов гадания на рунах</strong>. Эти практики
        были глубоко укоренены в <strong>естественных ритмах природы</strong> и
        восприятии мира как живого, дышащего организма.
      </p>
      <p>
        <strong>Бросание рун в гадательный круг</strong> — древний метод,
        основанный на делении круга на стороны света и архетипы времён года.
        Такой подход связывал рунические символы с циклами жизни, сезонами и
        направлениями.
      </p>
      <p>
        <strong>Гадание по кругу времён и сезонов</strong> — способ, при котором
        руны читались в контексте природного цикла. Здесь значение знаков
        раскрывается через ритмы времени, отражая путь от начала до завершения.
      </p>
      <p>
        <strong>Классические расклады рун</strong> — более позднее развитие
        рунической практики. Включают схемы из трёх, пяти и более рун. Эти
        методы начали оформляться под влиянием каббалистической и западной
        оккультной традиции.
      </p>
      <p>
        <strong>Синтетические системы</strong> появились в XX веке. Они
        объединяют <strong>руны</strong> с другими эзотерическими дисциплинами,
        такими как <strong>Таро</strong>, <strong>астрология</strong>,
        <strong>чакры</strong> и современные энергетические практики.
      </p>
      <p>
        В последующих разделах мы подробнее рассмотрим каждый из этих методов.
        Но уже сейчас важно помнить: <strong>гадание на рунах</strong> — это не
        просто техника. Это сакральный диалог между вопрошающим и древним
        знанием, что шепчет сквозь века.
      </p>
    </div>

    <!-- 2. Список видов гаданий -->
    <div class="methods-section">
      <h2>Наиболее известные виды гаданий</h2>

      <div
        v-for="method in methods"
        :key="method.id"
        :class="['method-item', method.id]"
      >
        <!-- Заголовок‑бургер -->
        <div class="method-header" @click="toggle(method.id)">
          <img :src="melnirIcon" alt="Иконка метода" />
          <span>{{ method.title }}</span>
        </div>

        <!-- Раскрывающаяся часть -->
        <transition name="fade">
          <div v-if="open[method.id]" class="method-detail">
            <!-- Контейнер картинок -->
            <div class="method-images">
              <img
                v-for="(src, idx) in method.images"
                :key="idx"
                :src="src"
                :alt="`${method.title} ${idx + 1}`"
              />
            </div>
            <!-- Описание -->
            <div class="method-description">
              <p v-for="(paragraph, idx) in method.description" :key="idx">
                {{ paragraph }}
              </p>
            </div>
            <!-- Кнопка закрыть -->
            <button class="close-button" @click="toggle(method.id)">
              Закрыть
            </button>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface Method {
  id: string;
  title: string;
  images: string[];
  description: string[];
}

export default defineComponent({
  name: "DivinationPage",
  setup() {
    const melnirIcon = "./img/Melnir.png";

    const methods: Method[] = [
      {
        id: "classic",
        title: "Классическое гадание на рунах (3 руны)",
        images: [
          "./img/runes/rune1.jpg",
          "./img/runes/rune7.jpg",
          "./img/runes/rune13.jpg",
        ],
        description: [
          "Метод расклада из трёх рун относится к более поздним формам гадания, возникшим после традиции бросания рун в круг.",
          "Три руны вытягиваются из мешочка по одной и выкладываются слева направо.",
          "Каждая из рун раскрывает определённую часть ситуации, часто — во временной или событийной последовательности.",
          "Наиболее распространены две схемы толкования: 'время' и 'действие'.",
          "По схеме времени: первая руна — настоящее, вторая — грядущее, третья — результат.",
          "По схеме действия: первая — суть вопроса, вторая — его развитие, третья — возможный итог.",
          "Структура расклада и подход к интерпретации рун во многом перекликаются с системой Таро.",
          "Этот способ удобен для личных и духовных вопросов, когда требуется целостный обзор ситуации.",
          "Прост в использовании, но требует сосредоточенности и чуткости к связи рун между собой.",
        ],
      },
      {
        id: "five",
        title: "Гадание на 5 рунах",
        images: [
          "./img/runes/rune2.jpg",
          "./img/runes/rune8.jpg",
          "./img/runes/rune14.jpg",
          "./img/runes/rune20.jpg",
          "./img/runes/rune16.jpg",
        ],
        description: [
          "Расклад из пяти рун используется для глубокого анализа ситуации и получения развернутого предсказания.",
          "Метод применяется, когда важна последовательность развития событий или требуется изучить путь.",
          "Руны вытягиваются по одной и выкладываются слева направо, в том порядке, как были извлечены.",
          "Первая руна означает 'сейчас' — текущее состояние или начало пути.",
          "Вторая, третья и четвёртая руны показывают ключевые этапы, которые предстоят.",
          "Пятая руна раскрывает возможный результат или итог движения.",
          "Способ помогает увидеть причинно-следственную цепь и внутреннюю динамику процесса.",
          "Особенно полезен при вопросах о будущем, сложных решениях и длительных ситуациях.",
        ],
      },
      {
        id: "three",
        title: "Гадание по древу Иггдрасиль",
        images: ["./img/runes/three.jpg"],
        description: [
          "Мистическая система, в которой каждая из девяти неизменяемых рун соотнесена с одним из девяти миров Иггдрасиля.",
          "Гадание показывает, на каком уровне бытия находится твой вопрос и какие силы в нём участвуют.",
          "Руны в этом гадании не переворачиваются — они устойчивы, как корни и ветви Мирового Древа.",
          "Сол — Муспельхейм (мир огня), Гифу — Асгард (мир богов), Инг — Ванахейм (мир плодородия), Дагаз — Альфхейм (мир света), Йера — Мидгард (мир людей), Науд — Ётунхейм (мир великанов), Хагаль — Хельхейм (мир смерти), Иса — Нифельхейм (мир холода), Эйваз — Свартальхейм (мир тьмы и подземных духов).",
          "Руна выбирается интуитивно или вытягивается из мешочка — затем анализируется её связь с соответствующим миром и архетипом.",
          "Этот способ особенно подходит для поиска глубинного смысла происходящего, внутреннего состояния и энергетического уровня запроса.",
          "Для более точного гадания можно разложить дополнительные руны на 'связях между мирами' — чтобы увидеть, как взаимодействуют силы и где возникает напряжение или поток.",
        ],
      },
      {
        id: "tree",
        title: "Бросание рун на гадательный круг",
        images: ["./img/runes/tree.jpg"],
        description: [
          "Один из древнейших способов гадания, использовавшийся ещё до появления классических раскладов.",
          "Для ритуала используется круг, разделённый на четыре сектора, соответствующие сторонам света и временам года.",
          "Руны бросаются внутрь круга — не выкладываются, а именно бросаются, позволяя случаю говорить голосом судьбы.",
          "Север связан с завершением и смертью, Восток — с началом, Юг — с активностью и силой, Запад — с переходами и зрелостью.",
          "Руны, упавшие ближе к центру круга, считаются наиболее значимыми.",
          "Руны, упавшие за пределы круга или перевёрнутые, как правило, не читаются.",
          "Метод позволяет понять, какие силы действуют в ситуации, с какой стороны приходит влияние и где сосредоточена энергия.",
          "Особенно подходит для глубинных, кармических и ритуальных вопросов.",
        ],
      },
    ];

    const open = reactive<Record<string, boolean>>({
      classic: false,
      five: false,
      three: false,
      tree: false,
    });

    function toggle(id: string) {
      open[id] = !open[id];
    }

    return {
      melnirIcon,
      methods,
      open,
      toggle,
    };
  },
});
</script>

<style scoped>
.divination {
  /* margin-top: 20px; */
  padding: 0 50px;
  color: rgb(47 47 38);
}

/* История */
.history-section {
  margin-bottom: 30px;
}
.history-section h2 {
  text-align: center;
  color: gold;
  text-shadow: 1px 1px 2px #000;
  /* margin-bottom: 10px; */
  margin: 0;
}
.history-section p {
  margin: 0;
  padding: 5px 15px;
  font-size: 20px;
  line-height: 1.6;
}

/* Заголовок раздела методов */
.methods-section h2 {
  text-align: center;
  color: gold;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 20px;
}

/* Общий стиль */
.method-item {
  border-top: 1px solid #555;
  padding: 10px 0;
}
.method-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s ease;
}
.method-header:hover {
  background: rgba(0, 0, 0, 0.05);
}
.method-header img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.method-header span {
  font-size: 18px;
  font-weight: 500;
}

/* Контейнер для картинок */
.method-images {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 12px;
}
.method-images img {
  width: 60px;
  height: auto;
  border: 1px solid #888;
  border-radius: 4px;
  object-fit: cover;
}

/* Раскрытое содержимое */
.method-detail {
  background: #b3b3b3;
  padding: 15px;
  margin-top: 10px;
  border-radius: 6px;
}
.method-description p {
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 20px;
}

/* Кнопка Закрыть */
.close-button {
  margin-top: 10px;
  padding: 8px 16px;
  background: #333;
  color: gold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.close-button:hover {
  box-shadow: 0 0 8px gold;
}

/* Плавные переходы */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Адаптив */
@media (max-width: 768px) {
  .history-section p {
    font-size: 17px;
  }
}

@media (max-width: 768px) {
  .method-description p {    
    font-size: 17px;
  }
}

/* -------------------------------------------------------------------------------------------------
   Специально для метода с id="three" (Гадание по древу Иггдрасиль) 
------------------------------------------------------------------------------------------------- */
.method-item.three .method-images img {
  width: 120px;
}

.method-item.tree .method-images img {
  width: 190px;
}

/* адаптив до 768px */
@media (max-width: 768px) {
  .method-item.three .method-images img {
    width: 100px;
  }
}

/* адаптив до 480px */
@media (max-width: 480px) {
  .method-item.three .method-images img {
    width: 90px;
  }
}
</style>
