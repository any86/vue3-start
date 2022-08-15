<template>
  <p>
    <input v-model="input" type="text" placeholder="随便输入点文字, 点击确定" />
    <button @click="add">增加</button>
  </p>
  <ul>
    <li v-for="(item,index) in list">
      <input v-model="item.title" type="text">
      <a @click="remove(index)"> 删除</a>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      input: "",
      list: [],
    };
  },

  methods: {
    add() {
      // 不为空才能添加
      if (!/^\s*$/.test(this.input)) {
        this.list.push({title:this.input});
        this.input = "";
      }
    },

    remove(index){
      this.list.splice(index,1)
    }
  },
});
</script>
