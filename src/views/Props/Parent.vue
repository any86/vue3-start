<template>
  <Child />
  <Child color="#f44336" content="hi vue3" />
</template>

<script>
import { defineComponent } from "vue";
import Child from "./Child.vue";
export default defineComponent({
  components: { Child },
});
</script>
