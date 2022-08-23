import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue';

export const useStore = defineStore('main', () => {
  const title = ref(`hello pinia`)
  const list = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const count = computed(() => list.reduce((a, b) => a + b));
  function add(){
    list.push(1)
  }
  return { title, count,list,add }
})