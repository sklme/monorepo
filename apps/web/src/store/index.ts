import { createStore } from 'vuex';

const store = createStore({
  state: {
    test: 'test',
  },
  mutations: {
    modifyTest(state) {
      state.test = 'test_modified';
    },
  },
  actions: {},
  getters: {},
});

export default store;
