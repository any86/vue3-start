<template>
  <router-link class="link mb-2" v-if="$route.path !== '/home'" to="/home"
    >🚀返回目录</router-link
  >
  <router-view v-slot="{ Component, route }">
    <transition name="slide-right" mode="out-in">
      <keep-alive :max="10">
        <article>
          <component :is="Component" :key="route.path" />
        </article>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="scss">
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

.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  transition: all 0.2s ease-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-2%);
}
</style>
