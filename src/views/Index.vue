<template>
  <h1>vue3知识点"精选"</h1>
  <p>
    <a target="_new" href="https://www.yuque.com/books/share/c0ab3348-87ab-4e77-a34e-10ede7dfb00e"></a>
  </p>
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