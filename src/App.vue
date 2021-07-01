<template>
  <router-view></router-view>
  <button @click="isShowDialog = !isShowDialog">显示/隐藏</button>
  <br />
  <Dialog v-model:is-show="isShowDialog"/>
</template>

<script lang="js">
import { defineComponent } from "vue";
import Dialog from './components/Dialog2.vue';
export default defineComponent({
  name: "App",

  components:{Dialog},

  data(){
    return {isShowDialog:false}
  },

  methods:{

  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
