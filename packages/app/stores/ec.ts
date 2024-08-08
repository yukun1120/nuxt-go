import {defineStore } from 'pinia'

interface counter {
    count: number,
}

export const useCounterStore = defineStore('counter', {
    state: (): counter => ({ count: 0 }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
})


// interface planStore {
//     planId: number,
//     name: string,
//     price: number,
// }

// export const usePlanSelectStore = defineStore('counter', {
//   state: (): planStore => ({
//     planId: 1,
//     name: "レンタルプラン",
//     price: 4750
//   }),
//   actions: {
//     increment() {
//       this.planId++
//     },
//   },
// })