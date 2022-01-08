const record_timer = {
  state: {
    timestamp: 0,
    timeout: 10 // ms
  },
  mutations: {
    update: (state) => { 
      state.timestamp = state.timestamp + state.timeout;
    },
    clear: (state) => { 
      state.timestamp = 0;
    }
  },
  getters: {
    value: (state) => {
      const time = new Date(state.timestamp);
      const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`; 
      const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`; 
      const milliseconds = time.getMilliseconds() < 10 ? `0${time.getMilliseconds()}` : `${time.getMilliseconds()}`; 

      return `${minutes}:${seconds}:${milliseconds}`;
    },
    timeout: (state) => {
      return state.timeout;
    }
  },
  namespaced: true
};

export { record_timer };
