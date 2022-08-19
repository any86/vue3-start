<template>
  <article>
    <a-switch v-model:checked="checked"></a-switch>
    <p>checked = {{ checked }}</p>
  </article>
</template>

<script>
import { defineComponent } from "vue";
import ASwitch from "../components/ASwitch.vue";
export default defineComponent({
  components: { ASwitch },

  data() {
    return { checked: false };
  },
});
</script>
