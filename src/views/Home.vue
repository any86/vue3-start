<template>
  <h1>🌱DEMO目录</h1>
  <router-link class="link" to="/props">新建组件(components & props)</router-link>
  <router-link class="link" to="/emit">父子组件通信($emit)</router-link>
  <router-link class="link" to="/v-model">自定义双向数据绑定(v-model))</router-link>
  <router-link class="link" to="/hooks">生命周期钩子(mounted & beforeUnmount)</router-link>
  <router-link class="link" to="/slot-demo">插槽(slot)</router-link>
</template>

<style lang="scss" scoped>
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
