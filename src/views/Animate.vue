<template>
  <button @click="isShow = !isShow">切换</button>

  <transition
    :duration="1000"
    mode="out-in"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <p v-if="isShow">hello</p>
    <p v-else>你好</p>

  </transition>
</template>

<script>
import "animate.css";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isShow: true,
    };
  },
});
</script>