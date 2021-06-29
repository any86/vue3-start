<template>
  <h1 @click="change">{{ msg }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Child',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  methods:{
  	change(){
      // 触发自定义的change事件
    	this.$emit('change-msg','子传父成功!')
    }
  }
})
</script>