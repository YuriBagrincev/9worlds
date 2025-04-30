<!-- DivinationPage.vue -->
<template>
  <!-- фон тянется на весь экран -->
  <section class="divination">
    <!-- содержимое жёстко ограничено .container -->
    <div class="container">
      <!-- 1. История гаданий -->
      <div class="history-section">
        <h2 class="history-section__title">История гадания на рунах</h2>
        <p class="history-section__text1">
          <strong>Руны</strong> — это не просто алфавит. Изначально они были
          <em>священными знаками</em>, <strong>магическими символами</strong>,
          через которые говорили духи, боги, сама судьба. Слово «руна» связано с
          древнегерманским корнем <em>rūn</em>, что означает «тайна», «шёпот»,
          «скрытое знание». Это был <strong>голос богов</strong>, переданный
          людям — не для записи будней, а для проникновения в невидимое.
        </p>

        <p class="history-section__text1">
          Согласно мифам, <strong>Один</strong>, верховный бог, не получил руны
          просто так. Он <em>повесил себя на ветвях Иггдрасиля</em>, Мирового
          древа, <strong>пронзив себя копьём</strong> и девять ночей провисел
          между мирами — без еды, без воды, один. И лишь тогда, испив из колодца
          Мимира, он <strong>увидел руны</strong> — и
          <em>вырвал их из тьмы</em> своим страданием. Руны стали
          <strong>жертвенным даром мудрости</strong>.
        </p>

        <p class="history-section__text1">
          Изначально руны были частью обряда: их <strong>резали</strong> на
          дереве, камне, кости, металл — и обязательно сопровождали
          <strong>голосом</strong>, гальдом, заклинанием. Но со временем,
          особенно с приходом <strong>Христианства</strong>, их магическая
          функция начала <em>размываться</em>. Часть рун стала использоваться
          для создания <strong>гальдрставов</strong> — магических формул и
          символов, часто с запутанным значением. Появились так называемые
          <strong>«банд-руны»</strong> — сросшиеся символы, сбивающие с толку
          профанов. А сами руны начали использовать
          <strong>в упрощённой форме как письменность</strong> — уже не как
          мистический ключ, а как инструмент для записи.
        </p>

        <p class="history-section__text1">
          Существуют разные рунические системы. <strong>Футарк</strong> — это
          древнейший рунический ряд из 24 знаков, известный как Старший футарк.
          Позднее возник <strong>Футорк</strong> — англосаксонский вариант,
          расширенный до 33 рун. В&nbsp;XX&nbsp;веке появился
          <strong>Утарк</strong> — реконструкция эзотерического порядка рун,
          предложенная в качестве системы <em>инициатического пути</em>, в
          которой важна не буква, а глубина смысла.
        </p>

        <p class="history-section__text1">
          Но сквозь века руны сохранили свою суть: это не просто письмена. Это
          <strong>ключи к тайному</strong>. Это <strong>поток силы</strong>. Это
          <strong>путь</strong>, который проходит не по земле — а по
          <em>душе</em>.
        </p>
      </div>

      <!-- 2. Основные виды рун -->
      <div class="runes-types">
        <h2 class="runes-types__title">Основные виды рун</h2>
        <p class="runes-types__intro">
          Ниже четыре ключевых руно ряда. Нажмите «Подробнее», чтобы увидеть
          больше.
        </p>

        <!-- ⬇️ класс list--open остаётся, пока идёт анимация закрытия -->
        <div class="runes-types__list" :class="{ 'list--open': listIsOpen }">
          <div
            v-for="type in runeTypes"
            :key="type.id"
            :class="['rune-card', type.id]"
          >
            <!-- обложка карточки -->
            <img :src="type.image" :alt="type.name" class="rune-card__cover" />
            <h3 class="rune-card__name">{{ type.name }}</h3>
            <p class="rune-card__desc">{{ type.description }}</p>

            <!-- кнопка Подробнее -->
            <button class="rune-card__btn-detail" @click="toggle(type.id)">
              Подробнее
            </button>

            <!-- полный список рун -->
            <transition
              name="fade"
              @before-leave="onLeaveStart"
              @after-leave="onLeaveEnd"
            >
              <div v-if="open[type.id]" class="rune-card__detail">
                <div v-for="r in type.runes" :key="r.id" class="rune-card__row">
                  <!-- ⬇️ эта картинка будет скрыта CSS-ом -->
                  <img
                    :src="`${base}img/runes/${r.id}.png`"
                    :alt="r.name"
                    class="rune-card__row-img"
                  />
                  <span class="rune-card__row-text">{{ r.name }}</span>
                </div>

                <button class="rune-card__btn-close" @click="toggle(type.id)">
                  Закрыть
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";

interface Rune {
  id: string;
  name: string;
}
interface Method {
  id: string;
  name: string;
  image: string;
  description: string;
  runes: Rune[];
}

export default defineComponent({
  name: "DivinationPage",
  setup() {
    const base = import.meta.env.BASE_URL; // добавлено

    /* -------------------- данные рун -------------------- */
    const futark: Rune[] = [
      {
        id: "fehu",
        name: "Феху- богатство, движимое имущество, огонь жизни, энергия начала.",
      },
      {
        id: "uruz",
        name: "Уруз- сила, первозданная природа, здоровье, животная мощь.",
      },
      {
        id: "thurisaz",
        name: "Турисаз- великан, шип, защита, вызов и прорыв, часто — внешний конфликт.",
      },
      {
        id: "Ансуз",
        name: "Ансуз- бог, вдохновение, речь, знание от высших сил.",
      },
      {
        id: "Райдо",
        name: "Райдо- путь, порядок, ритуал, движение в правильном направлении.",
      },
      {
        id: "Кеназ",
        name: "Кеназ- факел, внутренний огонь, обучение, раскрытие потенциала.",
      },
      {
        id: "Гебо",
        name: "Гебо- дар, обмен, союз, равновесие между «дать» и «получить».",
      },
      {
        id: "Вунье",
        name: "Вунье- радость, гармония, достижение внутреннего мира.",
      },
      {
        id: "Хагалаз",
        name: "Хагалаз- разрушение, хаос, очищение через кризис, трансформация.",
      },
      {
        id: "Наутиз",
        name: "Наутиз- нужда, препятствие, ограничение, требующее терпения.",
      },
      {
        id: "Иса",
        name: "Иса- лёд, остановка, одиночество, концентрация и выжидание.",
      },
      {
        id: "Йера",
        name: "Йера- урожай, годовой цикл, результат длительного процесса.",
      },
      {
        id: "Пертро",
        name: "Пертро- тайна, жребий, интуиция, открытие сокрытого.",
      },
      {
        id: "Эйваз",
        name: "Эйваз- ось, древо, переход, защита, внутренняя стабильность.",
      },
      {
        id: "Альгиз",
        name: "Альгиз- защита, высшая связь, благословение, предчувствие опасности.",
      },
      {
        id: "Соулу",
        name: "Соулу- солнце, победа, жизненная сила, полнота намерения.",
      },
      {
        id: "Тейваз",
        name: "Тейваз — справедливость, честь, жертва во имя высшей цели, мужская сила.",
      },
      {
        id: "Беркана",
        name: "Беркана— берёза, материнство, рост, женская энергия, исцеление.",
      },
      {
        id: "Эваз",
        name: "Эваз — лошадь, движение вперёд, сотрудничество, союз.",
      },
      {
        id: "Манназ",
        name: "Манназ — человек, «я» и «другой», разум, общество.",
      },
      {
        id: "Лагуз",
        name: "Лагуз — вода, поток, интуиция, глубинные эмоции.",
      },
      {
        id: "Ингуз",
        name: "Ингуз — плодородие, завершённость, внутренняя зрелость.",
      },
      {
        id: "Дагаз",
        name: "Дагаз — день, пробуждение, трансформация, момент озарения.",
      },
      {
        id: "Отал",
        name: "Отал — наследие, род, принадлежность, сакральная граница.",
      },
    ];
    /* …остальные массивы данных (allRunes, island, utark) без изменений … */

    const allRunes: Rune[] = [/* содержимое как было */];
    const island: Rune[] = [/* содержимое как было */];
    const utark: Rune[] = [/* содержимое как было */];

    /* -------------------- карточки методов -------------------- */
    const runeTypes: Method[] = [
      {
        id: "classic",
        name: "Старший Футарк",
        description: `Для чего использовался Старший футарк
Старший футарк был не просто алфавитом, а сакральной системой символов. Футарк — это язык богов и тайны, инструмент силы и внутреннего пути. Руны использовались:
в магии — их резали на дереве, камне, металле для защиты, исцеления, силы;
в гадании — чтобы услышать волю богов и понять ход судьбы;
в обрядах — как часть ритуалов и посвящений;
на талисманах — для усиления личной энергии и защиты;
в сакральной письменности — для культовых надписей, не для повседневного письма.`,
        image: "./img/runes/futark.jpg",
        runes: futark,
      },
      {
        id: "five",
        name: "Англосаксонский футорк",
        description: `Для чего использовался Англосаксонский футорк
Англосаксонский футорк — расширенная версия футарка, включающая до 34 рун. Этот руно-ряд сочетал языческое наследие с постепенным переходом к христианству, при этом каждая руна сохраняла свою мистическую суть. Руны применялись:
в магии и обрядах — особенно в раннесредневековой Англии, в традициях друидов и волшебников;
в письме — использовались шире, чем руны Старшего футарка, для записи текстов на древнеанглийском языке;
в гаданиях — как инструмент прорицания, особенно в личных и родовых вопросах;
в амулетах и гальдра-ставах — для защиты, укрепления воли и притяжения удачи.`,
        image: "./img/runes/allRunes.jpg",
        runes: allRunes,
      },
      {
        id: "iggdrasil",
        name: "Исландский футорк",
        description: `Исландский футорк — поздняя форма рунического письма, включающая как классические, так и пронзённые (stungnar) руны. Это был язык магов и знахарей, где каждая руна несла силу, тайну и цель. Его использовали:
в магии и гальдра-ставах — для создания мощных символов, оберегов и проклятий;
в лечебных формулах — особенно с использованием пронзённых рун (например, Plastur, Hardsol);
в обрядовой практике — как часть северной народной магии и рунических заклинаний;
в письменности — в Исландии руны сохранялись как сакральный алфавит вплоть до XVIII века.`,
        image: "./img/runes/island.jpg",
        runes: island,
      },
      {
        id: "modern",
        name: "Утарк ",
        description: `Утарк — это не алфавит, а путь инициации. Руны в нём расположены не по внешней логике, а по внутреннему порядку трансформации. Утарк начинается в темноте (Uruz) и заканчивается светом (Fehu), открывая круг духовной зрелости и возвращения к источнику. Его используют:
для магического посвящения — путь мага начинается с Хаоса и завершает себя овладением силой;
в глубинных гаданиях — чтобы увидеть не событие, а архетип, через который проходит человек;
в самопознании — как карта переходов через страх, кризис, смерть, пробуждение и силу;
в работе с рунами как с духовными сущностями — где каждая руна — это вратарь на пути инициации.`,
        image: "./img/runes/utark.jpg",
        runes: utark,
      },
    ];

    /* -------------------- состояние раскрытия -------------------- */
    const open = reactive<Record<string, boolean>>({
      classic: false,
      five: false,
      iggdrasil: false,
      modern: false,
    });

    const isClosingAnimation = ref(false);

    const listIsOpen = computed(
      () => isClosingAnimation.value || Object.values(open).some(Boolean)
    );

    function toggle(id: string) {
      open[id] = !open[id];
    }

    function onLeaveStart() {
      isClosingAnimation.value = true;
    }
    function onLeaveEnd() {
      isClosingAnimation.value = false;
    }

    return {
      base,
      runeTypes,
      open,
      toggle,
      listIsOpen,
      onLeaveStart,
      onLeaveEnd,
    };
  },
});
</script>

<style scoped>
/*******************************************************************************
   Фон и контейнер
******************************************************************************/
.divination {
  position: relative;
  padding: 30px;
  background: url("./img/runes-bg.png") center/cover no-repeat; /* изменено */
  min-height: 100vh;
  color: var(--black);
}
.divination::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(100, 97, 97, 0.85);
}
.divination > .container {
  position: relative;
  z-index: 1;
}

/*******************************************************************************
   1. История гаданий
******************************************************************************/
.history-section {
  margin-bottom: 40px;
}
.history-section__title {
  text-align: center;
  color: gold;
  text-shadow: 1px 1px 2px #000;
  font-size: 32px;
  margin-bottom: 16px;
}
.history-section__text {
  margin: 0 auto 12px;
  line-height: 1.6;
  font-size: 18px;
}

.history-section__text1 {
  margin: 0 auto 12px;
  line-height: 1.6;
  font-size: 18px;
  color: #ffffff;
}

/*******************************************************************************
   2. Карточки методов
******************************************************************************/
.runes-types__title {
  text-align: center;
  color: gold;
  text-shadow: 1px 1px 2px #000;
  font-size: 28px;
  margin-bottom: 8px;
}
.runes-types__intro {
  text-align: center;
  font-size: 16px;
  margin-bottom: 24px;
}

.runes-types__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: stretch;
}
.runes-types__list.list--open {
  align-items: flex-start;
}

.rune-card {
  flex: 1 1 calc(45% - 20px);
  max-width: calc(50% - 20px);
  background: #b3b3b3;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.rune-card__cover {
  display: block;
  margin: 0 auto 12px;
  width: 50%;
  height: auto;
  border-radius: 4px;
}

.rune-card__name {
  margin: 12px 0;
  font-size: 18px;
  font-weight: 500;
}

.rune-card__btn-detail {
  margin-top: auto;
  padding: 8px 16px;
  background: #333;
  color: gold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.2s, color 0.2s, transform 0.15s, box-shadow 0.15s;
}

.rune-card__btn-detail:is(:hover, :focus-visible) {
  background: gold;
  color: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.6);
}

.rune-card__detail {
  background: #fff;
  padding: 16px;
  border-radius: 6px;
  margin-top: 12px;
  text-align: left;
}
.rune-card__row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.rune-card__row-img {
  width: 15px;
}
.rune-card__row-text {
  font-size: 16px;
}
.rune-card__btn-close {
  margin-top: 12px;
  padding: 6px 12px;
  background: #333;
  color: gold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.rune-card__btn-close:hover {
  box-shadow: 0 0 8px gold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .rune-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
