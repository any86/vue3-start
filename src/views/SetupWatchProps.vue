<template>
  <label
    >苹果单价:
    <input
      type="number"
      v-model.number="price"
      style="padding: 8px; border: 1px solid #ccc"
    />
  </label>
  <SetupWatchPropsChild :price="price"></SetupWatchPropsChild>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SetupWatchPropsChild from "./SetupWatchPropsChild.vue";
export default defineComponent({
  name: "SetupWatchProps",

  components: { SetupWatchPropsChild },

  setup() {
    return { price: ref(5) };
  },
});
</script>