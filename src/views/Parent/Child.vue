<template>
  <h1 :style="{color:color}">{{content}}</h1>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        content: "hi vue",
        color: "#3eaf7c",
      };
    },
  });
</script>

<style>
  h1 {
    font-size: 32px;
  }
</style>