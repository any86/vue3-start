<template>
  <Child1 :msg="msg"  @change-msg="changeMsg"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 引入子组件
import Child1 from './Parent1/Child.vue'

export default defineComponent({
  name: 'Parent',
  
  data(){
  	return {msg:'Hello Vue 3'}
  },
  
  components: {
    Child1
  },
  
  methods:{
  	changeMsg(newMsg){
      this.msg = newMsg;
    }
  }
})
</script>