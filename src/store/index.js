import { createStore } from 'vuex'
import { score } from '@/store/modules/score'
import { record_timer } from '@/store/modules/record_timer'
import { game_matrix } from '@/store/modules/game_matrix'

export default createStore({
  modules: {
    score,
    record_timer,
    game_matrix,
  }
})
