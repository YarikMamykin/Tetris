class Timer {
  constructor(timeout, callback) {
    this.timeout = timeout; // ms
    this.callback = callback;
    this.handler = null;
  }

  start() {
    this.handler = setInterval(this.callback, this.timeout);
  }

  stop() {
    clearInterval(this.handler);
  }
};

export { Timer };
