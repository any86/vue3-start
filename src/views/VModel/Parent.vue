<template>
  <button @click="isShowDialog = !isShowDialog">显示/隐藏</button>
  <br />
  <Dialog v-model:is-show="isShowDialog"/>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from './Child.vue';
export default defineComponent({
  name: "App",

  components:{Dialog},

  data(){
    return {isShowDialog:false}
  },
});
</script>