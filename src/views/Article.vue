<template>
  <div class="goods">
    <h1 class="title">文章标题</h1>
    <goods></goods>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Goods from "./Article/Goods.vue";
export default defineComponent({
  components: { Goods },
});
</script>

<style  scoped>
.title {
  font-size: 16px;
  color: blue;
}
</style>
