class GameOver extends Error {
  constructor() {
    super('GameOver');
  }
};

class OverFlow extends Error {
  constructor() {
    super('OverFlow');
  }
};

class MapFailure extends Error {
  constructor() {
    super('MapFailure');
  }
};

export { 
  GameOver,
  OverFlow,
  MapFailure,
};
