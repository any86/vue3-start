<template>
  <p>n : {{ n }}</p>
  <p>s : {{ s }}</p>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const [s, change] = useS();
    const n = useN();
    return { n, s, change };
  },
});

function useN() {
  return "一";
}

function useS() {
  const s = ref("你好");
  function change() {
    s.value = "hello";
  }
  onMounted(() => {
    change();
  });

  return [s, change];
}
</script>