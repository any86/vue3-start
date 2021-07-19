<template>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    data(){
    	return {selected:''};
    }
  });
</script>