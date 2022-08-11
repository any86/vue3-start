<template>
  <Child :msg="msg" @change-msg="changeMsg" />
</template>

<script>
import { defineComponent } from "vue";
// 引入子组件
import Child from "./Child.vue";

export default defineComponent({
  name: "Parent",

  data() {
    return { msg: "Hello Vue 3" };
  },

  components: {
    Child,
  },

  methods: {
    // 注意!!!
    // 第一个ts的知识点来了
    changeMsg(newMsg) {
      this.msg = newMsg;
    },
  },
});
</script>
