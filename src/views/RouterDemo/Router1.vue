<template>
  <h1 style="color:red">Router 1 <small>id = {{$route.params.id}}</small></h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    console.log(this.$route);
  },
});
</script>
