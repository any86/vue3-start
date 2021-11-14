<template>
  <Child v-model:number="n"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from './SetupParams/Child.vue'
export default defineComponent({
  name: "SetupParams",

  components:{Child},

  data(){
    return {n:99};
  },
});
</script>
