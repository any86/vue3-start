<template>
  <Parent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Parent from "./Emit/Parent.vue";
export default defineComponent({
  components: { Parent },
});
</script>
