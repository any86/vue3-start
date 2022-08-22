<template>
  <a-switch v-model:checked="checked"></a-switch>
  <p>checked = {{ checked }}</p>
</template>

<script setup>
import { ref } from "vue";
import ASwitch from "../components/ASwitch.vue";
const checked = ref(false);

</script>
