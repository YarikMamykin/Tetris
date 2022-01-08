import { createApp } from 'vue'
import Tetris from './Tetris.vue'
import store from './store'

createApp(Tetris).use(store).mount('#tetris')
