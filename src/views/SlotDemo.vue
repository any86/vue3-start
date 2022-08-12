<template>
  <Colors v-slot="{ value, title }">
    <span :style="{ color: value }">{{ title }}</span>
  </Colors>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Colors from "./SlotDemo/Colors.vue";
export default defineComponent({
  name: "Parent",

  components: {
    Colors,
  },
});
</script>
