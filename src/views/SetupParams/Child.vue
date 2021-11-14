<template>
  <h1>{{ number }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SetupParamsChild",

  props: {
    number: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    // 模拟接口请求
    setTimeout(() => {
      emit("update:number", props.number + 1);
    }, 1000);
  },
});
</script>
