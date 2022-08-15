<template>
  <span
    class="switch"
    :class="checked && 'switch--checked'"
    @click="onChange"
  ></span>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:{
    checked:{
      type:Boolean,
      default:false
    }
  },

  methods:{
    onChange(){
      this.$emit('update:checked',!this.checked);
    }
  }
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
    background-color: #42b883;
    &:after {
      transform: translate3d(20px, 0, 0);
    }
  }
}
</style>
