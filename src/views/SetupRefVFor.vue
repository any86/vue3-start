<template>
  <!-- 第3步-->
  <h1 v-for="n in 3" :key="n" :ref="getTitleRefs">标题{{ n }}</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "SetupRefVFor",

  setup() {
    //  第1步
    const titleRefs = ref(null);

    function getTitleRefs(el: HTMLElement) {
      console.log(el);
    }

    // 第2步
    return { getTitleRefs };
  },
});
</script>