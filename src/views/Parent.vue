<template>
  <Child/>
  <Child/>
</template>

<script>
  import { defineComponent } from "vue";
  import Child from './Parent/Child.vue'
  export default defineComponent({
    components:{Child},
  });
</script>