<template>
  <h1 :style="{color:color}">{{content}}</h1>
  <button @click="changeH1">修改</button>
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

    methods: {
      changeH1() {
        this.color = "#f00";
        this.content = "hello world";
      },
    },
  });
</script>

<style>
  h1 {
    font-size: 32px;
  }
</style>