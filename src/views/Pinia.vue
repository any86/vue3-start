<template>
  <p>标题: {{ store.title }}</p>
  <p>总数: {{ store.count }}</p>
  <p>列表: {{ store.list }}</p>
  <button @click="store.add">加1</button>
</template>

<script setup>
import { useStore } from "@/pStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";
const store = useStore();
const state = storeToRefs(store);
watch(state.count, (count) => {
  console.log(count);
});
</script>
