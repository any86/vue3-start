<template>
  <Book>
    <template v-slot="book">
      <h2>{{ book.title }}</h2>
      <h3>{{ book.author }}</h3>
    </template>
  </Book>

  <Colors v-slot="{value,title}">
    <span :style="{ color:value }">{{ title }}</span>
  </Colors>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Book from "./SlotBind/Book.vue";
import Colors from "./SlotBind/Colors.vue";

export default defineComponent({
  name: "SlotBind",

  components: {
    Colors,
    Book,
  },
});
</script>