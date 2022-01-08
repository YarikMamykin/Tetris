import { GameController } from '@/store/common/game_controller'

const game_controller = {
  state: {
    self: null
  },
  mutations: {
    // Do NOT use arrow functions here!!!
    // Otherwise 'this' will be undefined!
    start(state) { 
      if(state.self === null) {
        state.self = new GameController({
          storage: this,
          record_timeout: this.getters['record_timer/timeout'],
          level: this.getters['level/value'],
          maxLevel: this.getters['level/max']
        });
      }
      state.self.start();
    },
    stop(state) {  
      state.self.stop();
    },
    change_speed(state, { level, maxLevel }) {
      state.self.on_level_changed(level, maxLevel);
    }
  },
  getters: {
    running: (state) => { return self.running; }
  },
  namespaced: true
};

export { game_controller }
