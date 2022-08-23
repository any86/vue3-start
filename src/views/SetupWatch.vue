<template>
  <label
    >苹果单价:
    <input
      v-model="price"
      type="number"
      style="padding: 8px; border: 1px solid #ccc"
  /></label>
  <label
    >数量:
    <input
      v-model="num"
      type="number"
      style="padding: 8px; border: 1px solid #ccc"
  /></label>
  <p>总价:{{ count }}</p>
</template>

<script setup>
import { watch, ref } from "vue";

const num = ref(10);
const price = ref(5);
const count = ref(0);
// ⭐watch
watch(
  [num, price],
  ([num, price]) => {
    // 注意此处的num和price已经是数字值而不是ref对象.
    // 所以不再需要通过.value访问
    count.value = price * num;
  },
  { immediate: true }
);
</script>
