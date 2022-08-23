<template>
  <p ref="target">目标</p>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import ATouch from "any-touch";
const target = ref(null);
let at = null;

// 组件挂载到页面执行的函数.
onMounted(() => {
  // 初始化第三方插件
  at = new ATouch(target.value);
});

// 组件销毁之前执行的函数.
onBeforeUnmount(() => {
  // 销毁第三方插件
  at.destroy();
});
</script>
