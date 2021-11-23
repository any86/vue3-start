<template>
  <p>苹果单价: {{ price }}</p>
  <label>数量: <input
    v-model="num"
    type="number"
    style="padding: 8px; border: 1px solid #ccc"
  /></label>
  <p>总价:{{ count }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "SetupComputed",

  setup() {
    const num = ref(10);
    const price = ref(5);
    const count = computed(() => num.value * price.value);
    return { num, count, price };
  },
});
</script>