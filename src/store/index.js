import { createStore } from 'vuex'
import { score } from '@/store/modules/score'
import { record_timer } from '@/store/modules/record_timer'
import { game_matrix } from '@/store/modules/game_matrix'
import { next_block_matrix } from '@/store/modules/next_block_matrix'
import { game_controller } from '@/store/modules/game_controller'
import { level } from '@/store/modules/level'

export default createStore({
  modules: {
    score,
    record_timer,
    game_matrix,
    next_block_matrix,
    game_controller,
    level
  }
})
