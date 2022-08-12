<template>
  <Parent />
  <a
    class="link mt-6"
    href="https://github.com/any86/vue3-start/blob/master/src/views/VModel/Parent.vue"
    target="_blank"
    >查看课程源码</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Parent from "./VModel/Parent.vue";
export default defineComponent({
  components: { Parent },
});
</script>
