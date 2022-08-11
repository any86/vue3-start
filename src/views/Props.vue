<template>
  <Child />
  <Child color="#f44336" content="hi vue3" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Props/Child.vue";
export default defineComponent({
  components: { Child },
});
</script>
