<template>
  <article>
    <h1>{{ store2.userName }}</h1>
    <h1>总数: {{ store2.count }}</h1>
    {{ store2.todos }}
    <button @click="changeUserName">改变</button>
  </article>
</template>

<script>
import { defineComponent } from "vue";
import {store2} from '@/store'
export default defineComponent({
  data(){
    return {store2}
  },
  methods: {
    changeUserName() {
      store2.userName = '拉塞尔';
      store2.count = 100;
    },
  },
});
</script>
