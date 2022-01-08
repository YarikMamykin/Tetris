class CellsNotArray extends Error {
  constructor() {
    super('Please provide array of cells!');
  }
};

class CellsArrayEmpty extends Error {
  constructor() {
    super('Array of cells is empty!');
  }
};

class EmptyRows extends Error {
  constructor() {
    super('Row of cells is empty!');
  }
};

class RowsDifferentLength extends Error {
  constructor() {
    super('Rows have different length!');
  }
};

export { 
  CellsNotArray,
  CellsArrayEmpty,
  EmptyRows,
  RowsDifferentLength
};
