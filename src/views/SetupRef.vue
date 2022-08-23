<template>
  <h1 v-for="n in 3" :key="n" :ref="getTitleRefs">标题{{ n }}</h1>
</template>

<script setup>
function getTitleRefs(el) {
  console.log(el);
}
</script>
