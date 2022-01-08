import { Matrix } from '@/store/common/matrix'

const next_block_matrix = {
  state: {
    self: new Matrix(4,4)
  },
  mutations: {
    map: (state, matrix) => {
      state.self.pretty_map(matrix);
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

export { next_block_matrix }
