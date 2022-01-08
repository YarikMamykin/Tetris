import { Matrix } from '@/store/common/matrix';
import { Cell } from '@/store/common/cell';
import { CellsNotArray, CellsArrayEmpty, EmptyRows, RowsDifferentLength } from '@/store/common/errors/tetris_block_errors'

const MoveDirection = {
  left: 0,
  right: 1,
  down: 2,
  up: 3
};

class TetrisBlock extends Matrix {
  constructor(cells) {

    if(cells.constructor.name !== 'Array') 
      throw new CellsNotArray();

    if(cells.length === 0)
      throw new CellsArrayEmpty();

    if(cells[0].length === 0)
      throw new EmptyRows();

    const cols = cells[0].length;
    
    if(!cells.every((row) => { return row.length === cols; }))
      throw new RowsDifferentLength();

    const rows = cells.length;

    super(rows, cols);

    this.resetCells(cells);
  }

  move(direction) {
    switch(direction) {
      case MoveDirection.up: this.cells.forEach((row)=> { row.forEach((cell) => { cell.coords.row -= 1; }); }); break;
      case MoveDirection.down: this.cells.forEach((row)=> { row.forEach((cell) => { cell.coords.row += 1; }); }); break;
      case MoveDirection.left: this.cells.forEach((row)=> { row.forEach((cell) => { cell.coords.col -= 1; }); }); break;
      case MoveDirection.right: this.cells.forEach((row)=> { row.forEach((cell) => { cell.coords.col += 1; }); }); break;
    }

    return this;
  }

  score() {
    return this.cells.map((row) => {
      return row.filter((cell) => { return cell.color !== 'unset'; }).length;
    }).reduce((p,c) => { return p + c; });
  }

  static copy(block) {
    const rows = block.cells.length;
    const cols = block.cells.at(0).length;

    let cells = [];

    for(let i = 0; i < rows; ++i) {
      cells.push([]);
      for(let j = 0; j < cols; ++j) {
        cells[i].push(Cell.copy(block.cells[i][j]))
      }
    }

    return new TetrisBlock(cells);
  }
};

export { TetrisBlock, MoveDirection };
