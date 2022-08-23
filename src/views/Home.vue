<template>
  <article>
    <h1>🌱DEMO目录</h1>
    <router-link class="link" to="/props"
      >新建组件(components & props)</router-link
    >
    <router-link class="link" to="/emit">父子组件通信($emit)</router-link>
    <router-link class="link" to="/v-model"
      >自定义双向数据绑定(v-model))</router-link
    >
    <router-link class="link" to="/hooks"
      >生命周期钩子(mounted & beforeUnmount)</router-link
    >
    <router-link class="link" to="/slot-demo">插槽(slot)</router-link>
    <router-link class="link" to="/switch">switch组件</router-link>
    <router-link class="link" to="/h">h函数</router-link>
    <router-link class="link" to="/router-1/100">router-1</router-link>
    <router-link class="link" to="/router-2">router-2</router-link>
    <router-link class="link" to="/vuex">vuex</router-link>
    <router-link class="link" to="/pinia">pinia</router-link>

    <h2>🚼️给新手的vue3保姆教学</h2>
    <p class="mt-2">
      <a class="link" href="https://www.yuque.com/books/share/c0ab3348-87ab-4e77-a34e-10ede7dfb00e">https://www.yuque.com/books/share/c0ab3348-87ab-4e77-a34e-10ede7dfb00e</a>
    </p>
    <p>密码：wru9</p>
  </article>
</template>

<style lang="scss" scoped>
.link {
  display: block;
  color: #42b883;
  line-height: 2;
  text-decoration: none;
  &:hover {
    transition: all 0.2s;
    padding-left: 2px;
    text-decoration: underline;
  }
}
</style>
