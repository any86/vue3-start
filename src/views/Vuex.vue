<template>
  <article>
    <h1>{{ $store.state.userName }}</h1>
    <h1>总数: {{ $store.state.count }}</h1>
    {{ $store.getters.doneTodos }}
    <button @click="changeUserName">点击后, 1秒后总数变成100</button>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    changeUserName() {
      this.$store.commit("changeUserName", "拉塞尔");
      this.$store.dispatch("incrementAsync", 100);
    },
  },
});
</script>
