import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import kebabCase from 'lodash/kebabCase';

const pages = import.meta.glob('./views/*.vue');
const asyncRoutes: RouteRecordRaw[] = [];
Object.keys(pages).forEach((path) => {
  const matched = path.match(/.*\/(\w+)\.vue/);
  if (null !== matched) {
    const name = matched[1];
    asyncRoutes.push({ name, path: `/${kebabCase(name)}/:id?`, component: pages[path] });
  }
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{path:'/', redirect:'/home'},...asyncRoutes],
});

export default router;
