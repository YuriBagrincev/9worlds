import { defineStore } from 'pinia'

interface Rune {
  id: number
  name: string
  meaning: string
  image: string
}

export const useRunesStore = defineStore('runes', {
  state: () => ({
    runes: [
      {
        id: 1,
        name: 'Феху',
        meaning: 'имущество, богатство, успех',
        image: '/img/runes/fehu.png'
      },
      {
        id: 2,
        name: 'Уруз',
        meaning: 'силa, потенциал, здоровье',
        image: '/img/runes/uruz.png'
      }
      // Здесь можешь продолжить свой массив рун
    ] as Rune[],
    drawnRune: null as Rune | null
  }),
  getters: {
    // Пример: получить руну по ID
    getRuneById: (state) => {
      return (id: number) => state.runes.find((rune) => rune.id === id)
    }
  },
  actions: {
    // Случайный выбор руны (для гадания)
    drawRandomRune() {
      const randIndex = Math.floor(Math.random() * this.runes.length)
      this.drawnRune = this.runes[randIndex]
    }
  }
})
