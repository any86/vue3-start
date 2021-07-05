// vue
<template>
  <h1 @click="change">{{ $store.state.userName }}</h1>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    change(){
      this.$store.commit(`changeUserName`,`拉塞尔`)
    }
  },
});
</script>

<style scoped>
</style>
