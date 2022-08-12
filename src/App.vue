<script setup lang="ts"></script>

<template>
  <router-link class="link mb-2" v-if="$route.path !== '/home'" to="/home">🚀返回目录</router-link>
  <router-view></router-view>

</template>

<style lang="scss">
.link {
  display: block;
  color:#42b883;
  line-height: 2;
  text-decoration: none;
  &:hover{
    transition: all .2s;
    padding-left: 2px;
    text-decoration: underline;
  }
}
</style>
