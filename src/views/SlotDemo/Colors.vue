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
        { title: "red", value: "#f00" },
        { title: "green", value: "#0f0" },
        { title: "blue", value: "#00f" },
      ],
    };
  },
});
</script>