const score = {
  state: {
    score: 0
  },
  mutations: {
    increment: (state, inc) => { state.score = state.score + inc; },
    clear: (state) => { state.score = 0; }
  },
  getters: {
    value: (state) => { return state.score; }
  },
  namespaced: true
};

export { score as score };
