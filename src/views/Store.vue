<template>
  <h1 @click="changeUserName">{{ $store.state.userName }}</h1>
  <h1>总数: {{ $store.state.count }}</h1>
  {{ $store.getters.doneTodos }}
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    this.$store.dispatch("incrementAsync", 100);
  },

  methods: {
    changeUserName() {
      this.$store.commit("changeUserName", "拉塞尔");
    },
  },
});
</script>
