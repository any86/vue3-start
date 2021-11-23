<template>
  <p>苹果单价: {{ price }}</p>
  <label
    >数量:
    <input
      v-model="num"
      type="number"
      style="padding: 8px; border: 1px solid #ccc"
  /></label>
  <p>总价:{{ count }}</p>
  <button @click="stop">stop</button>
</template>

<script lang="ts">
import { watch, defineComponent, ref } from "vue";
export default defineComponent({
  name: "SetupWatch",

  setup() {
    const num = ref(10);
    // 此处可以不用ref,
    // 因为值不需要改变(响应式)
    const price = 5;
    const count = ref(0);
    // ⭐watch
    const stop = watch(num, (num) => {
      count.value = price * num;
    },{immediate:true});
    
    return { num, count, price,stop };
  },
});
</script>