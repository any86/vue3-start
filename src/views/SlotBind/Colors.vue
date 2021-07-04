<template>
  <p v-for="(color,index) in colors" :key="index">
    <slot v-bind="color"></slot>
  </p>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      colors: [
        { title: "红色", value: "red" },
        { title: "绿色", value: "green" },
        { title: "蓝色", value: "blue" },
      ],
    };
  },
});
</script>