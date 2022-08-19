import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import kebabCase from "lodash/kebabCase";
import Router1 from "./views/RouterDemo/Router1.vue";

const pages = import.meta.glob("./views/*.vue");
const asyncRoutes: RouteRecordRaw[] = [];
Object.keys(pages).forEach((path) => {
  const matched = path.match(/.*\/(\w+)\.vue/);
  if (null !== matched) {
    const name = matched[1];
    asyncRoutes.push({
      name,
      path: `/${kebabCase(name)}/:id?`,
      component: pages[path],
    });
  }
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/router-1/:id?", component: Router1 },
    { path: "/router-2", component: ()=>import('./views/RouterDemo/Router2.vue') },
    ...asyncRoutes,
  ],
});

export default router;
