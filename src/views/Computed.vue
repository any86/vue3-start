<template>
  <h1>总价格: {{total}}</h1>
  <button @click="change">让苹果涨价</button>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    data(){
    	return {
        appleNumber: 71, 
        applePrice:11,
        bannerNumber: 99, 
        bannerPrice:12,
     	};
    },
    
    computed:{
    	total(){
      	return this.appleNumber * this.applePrice + this.bannerNumber * this.bannerPrice;
      }
    },
    
    methods:{
    	change(){
      	this.appleNumber++;
      }
    }
  });
</script>