<template>
  <article v-show="modelValue" class="a-dialog">
    你好Vue3
    <a @click="$emit('update:modelValue', false)">关闭</a>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
    },
  },
});
</script>

<style>
.a-dialog {
  display: inline-block;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  font-size: 16px;
  background: #3eaf7c;
  color: #fff;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
}

.a-dialog > a {
  cursor: pointer;
  padding: 4px;
  border: 1px solid #fff;
}
</style>