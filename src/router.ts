import { createRouter, createWebHashHistory } from "vue-router";
import Ref from './views/Ref.vue';
import kebabCase from 'lodash/kebabCase';

const EXCLUDE_PAGE = ['Login'];
const pages = import.meta.glob('./views/*.vue');
const asyncRoutes: { name: string, path: string, component: () => Promise<{ [key: string]: any }> }[] = [];
Object.keys(pages).forEach(path => {
  const matched = path.match(/.*\/(\w+)\.vue/);
  if (null !== matched) {
    const name = matched[1];
    if (!EXCLUDE_PAGE.includes(name)) {
      asyncRoutes.push({ name, path: `/${kebabCase(name)}`, component: pages[path] });
    }
  }
});


const routes = [
  // 页面包含在整体js中
  { path: '/ref/:id', name:'Ref', component:  Ref},
  // 页面是独立的js, 访问当前路由时异步加载
  { path: '/watch', component: () => import('./views/Watch.vue') },
  ...asyncRoutes,
];

// 初始化路由
export default createRouter({
  history: createWebHashHistory(),
  routes,
})