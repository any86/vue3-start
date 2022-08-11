<script setup lang="ts"></script>

<template>
  <router-link v-if="$route.path !== '/home'" to="/home">返回目录</router-link>
  <router-view></router-view>
</template>

<style scoped></style>
