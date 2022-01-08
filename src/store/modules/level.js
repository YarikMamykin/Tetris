const level = {
  state: {
    self: 1,
    max: 5,
    min: 1
  },
  mutations: {
    increment(state) { 
      if(state.max !== state.self) 
        state.self += 1;
    },
    decrement(state) { 
      if(state.min !== state.self)
        state.self -= 1;
    }
  },
  getters: {
    value: (state) => { return state.self; },
    max: (state) => { return state.max; }
  },
  namespaced: true
};

export { level };
