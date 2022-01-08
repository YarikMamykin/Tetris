import { Matrix } from '@/store/common/matrix'

const game_matrix = {
  state: {
    self: new Matrix(20,10)
  },
  mutations: {
    map: (state, matrix) => {
      state.self.map(matrix);
    },
    unmap: (state, matrix) => {
      state.self.unmap(matrix);
    },
    clear: (state) => {
      state.self.clear();
    }
  },
  getters: {
    value: (state) => { return state.self.toArray(); }
  },
  namespaced: true
};

export { game_matrix }
