import { createStore } from 'vuex';

interface State {
  userName: string
}

export default createStore<State>({
  state() {
    return {
      userName: 'Russell'
    }
  },

  mutations: {
    changeUserName(state, name: string) {
      state.userName = name;
    }
  }
})