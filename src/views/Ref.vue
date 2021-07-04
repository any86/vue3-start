<template>
  <p :ref="getEl" v-for="n in 5" :key="n">{{ n }}</p>
</template>

<script >
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return { elList: [] };
  },

  mounted(){
    console.log(this.elList);
  },

  methods: {
    getEl(el) {
      this.elList.push(el);
    },
  },
});
</script>