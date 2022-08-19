<template>
  <Parent />
</template>

<script>
import { defineComponent } from "vue";
import Parent from "./Emit/Parent.vue";
export default defineComponent({
  components: { Parent },
});
</script>
