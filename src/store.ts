import { createStore } from "vuex";
import {reactive} from 'vue';

export const store2 = reactive({
  userName: "Russell",
  count: 1,
  todos: [
    { title: '已完成', done: true },
    { count: '未完成', done: false },
  ],
});


// 创建一个新的 store 实例
export default createStore({
  state() {
    return {
      userName: "Russell",
      count: 0,
      todos: [
        { title: '已完成', done: true },
        { count: '未完成', done: false },
      ],
    };
  },

  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },

  mutations: {
    increment(state, count) {
      state.count += count;
    },

    changeUserName(state, name) {
      state.userName = name;
    }
  },
  actions: {
    incrementAsync({ commit }, count) {
      // 模拟异步请求
      setTimeout(() => {
        commit("increment", count);
      }, 1000);
    },
  },
});
