import { createRouter, createWebHashHistory } from "vue-router";
import Ref from './views/Ref.vue';
const routes = [
  // 页面包含在整体js中
  { path: '/ref/:id', name:'Ref', component:  Ref},
  // 页面是独立的js, 访问当前路由时异步加载
  { path: '/watch', component: () => import('./views/Watch.vue') },
];

// 初始化路由
export default createRouter({
  history: createWebHashHistory(),
  routes,
})