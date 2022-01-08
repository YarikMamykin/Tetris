import { createStore } from 'vuex'
import { game_matrix } from '@/store/modules/game_matrix'

export default createStore({
  modules: {
    game_matrix,
  }
})
