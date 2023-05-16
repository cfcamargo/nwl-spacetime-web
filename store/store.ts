import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Eduardo'
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
      getName : (state) => state.name
    },
    actions: {
      increment() {
        this.count++
      },
    },
})