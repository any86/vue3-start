<template>
  <span
    class="switch"
    :class="checked && 'switch--checked'"
    @click="checked = !checked"
  ></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return { checked: false };
  },
});
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  box-sizing: content-box;
  display: inline-block;
  height: 22px;
  width: 42px;
  border-radius: 24px;
  background-color: #adb5bd;
  transition: background-color 200ms;
  vertical-align: middle;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    border-radius: 9px;
    box-shadow: 0 2px 4px #00230b33;
  }
  &--checked {
    background-color: #4083c6;
    &:after {
      transform: translate3d(20px, 0, 0);
    }
  }
}
</style>
