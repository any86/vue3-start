<template>
  <select v-model="page">
    <option v-for="n in 100" :key="n" :value="n">第{{ n }}页</option>
  </select>

  <button @click="page--">上一页</button>
  <button @click="page++">下一页</button>

  <div>
    <p
      v-for="{ title } in list"
      :key="title"
      style="font-size: 12px; margin: 0"
    >
      {{ title }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      page: 50,
      list: [],
    };
  },

  watch: {
    page: {
      immediate: true,
      handler(page) {
        axios
          .get(`https://cnodejs.org/api/v1/topics?limit=5`, {
            params: { page },
          })
          .then((response) => {
            const { data } = response.data;
            this.list = data;
          });
      },
    },
  },
});
</script>

<style scoped>
span {
  display: inline-block;
  margin: 8px;
  padding: 16px;
  border: 1px solid #ddd;
}
</style>