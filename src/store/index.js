import { createStore } from 'vuex'
import { score } from '@/store/modules/score'
import { game_matrix } from '@/store/modules/game_matrix'

export default createStore({
  modules: {
    score,
    game_matrix,
  }
})
