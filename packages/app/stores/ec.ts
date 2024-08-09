import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    function increment() {
        count.value++
    }
    return { count, increment };
},
{
    persist: true,
}
)



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