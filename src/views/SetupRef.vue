<template>
  <h1 ref="titleRef">标题</h1>
</template>

<script lang="ts">
import { defineComponent,onMounted,ref } from "vue";
export default defineComponent({
  name: "SetupRef",

  setup(){
    const titleRef = ref(null);
    onMounted(()=>{
      console.log(titleRef.value);
    })
    return {titleRef}
  }
});
</script>
