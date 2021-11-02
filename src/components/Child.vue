<template>
  <h1 :style="{color}">{{content}}</h1>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    props:{
      content:{
        type:String,
        default:'hi vue'
      },
      
      color:{
        type:String,
        default:'#3eaf7c'
      }
    },
  });
</script>