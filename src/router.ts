
import { createRouter, createWebHashHistory } from "vue-router";
import kebabCase from 'lodash/kebabCase';
const EXCLUDE_PAGE = ['Login'];
const pages = import.meta.glob('./views/*.vue');
const asyncRoutes: { name: string, path: string, component: () => Promise<{ [key: string]: any }> }[] = [];
Object.keys(pages).forEach(path => {
  const matched = path.match(/.*\/(\w+)\.vue/);
  if (null !== matched) {
    const name = matched[1];
    if(!EXCLUDE_PAGE.includes(name)){
      asyncRoutes.push({ name, path: `/${kebabCase(name)}`, component: pages[path] });
    }
  }
});
export default createRouter({
    history: createWebHashHistory(),
    routes:asyncRoutes,
})