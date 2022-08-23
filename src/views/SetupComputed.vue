<template>
  <p>苹果单价: {{ price }}</p>
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
import { computed, ref } from "vue";
const num = ref(10);
const price = ref(5);
const count = computed(() => num.value * price.value);
console.log(count.value);
</script>
