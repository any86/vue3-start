<template>
  <p>{{ w }}</p>
</template>

<script setup>
import {onMounted} from 'vue'
const props = defineProps({
  w: {
    type: String,
    default: "hello",
  },
});

const emit = defineEmits({
  // 具有验证函数
  submit: (payload) => {
    if (payload) {
      return true;
    } else {
      console.warn(`不为空!`);
      return false;
    }
  },
});

onMounted(() => {
  emit("submit"); // 报错
  emit("submit", "hello"); // 正确
});
</script>
