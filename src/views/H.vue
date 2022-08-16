<script>
import { defineComponent, h } from "vue";
import ASwitch from "../components/ASwitch.vue";
export default defineComponent({
  components: { ASwitch },

  data() {
    return { checked: false };
  },

  render() {
    return h(ASwitch, {
      checked: this.checked,
      ["onUpdate:checked"]: (checked) => {
        this.checked = checked;
      },
    });
  },
});
</script>
