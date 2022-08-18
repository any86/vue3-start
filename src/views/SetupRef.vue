<template>
  <p>n : {{ n }}</p>
  <p>s : {{ s }}</p>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return { n: ref("1"), s: "你好" };
  },

  methods: {
    changeN() {
      this.n = "一";
    },

    changeS() {
      this.s = "hello";
    },
  },
});
</script>
