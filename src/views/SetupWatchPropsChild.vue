<template>
  <label
    >数量:
    <input
      v-model="num"
      type="number"
      style="padding: 8px; border: 1px solid #ccc"
  /></label>
  <p>总价:{{ count }}</p>
</template>

<script lang="ts">
import { watch, defineComponent, ref, computed, toRef } from "vue";
export default defineComponent({
  name: "SetupWatchMultiple ",

  props: {
    price: {
      type: Number,
      default: 1,
    },
  },

  setup(props) {
    const num = ref(10);
    const count = ref(0);
    // ⭐watch
    watch(
      [toRef(props,'price') , num],

      ([price, num]) => {
        count.value = price * num;
      },

      { immediate: true }
    );

    return { num, count };
  },
});
</script>