<template>
  <article>
    <h1 style="color:#3eaf7c;">一本书</h1>
    <slot v-bind="detail"></slot>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name:'Book',
  data() {
    return { detail: { title: "呐喊", author: "鲁迅" } };
  },
});
</script>