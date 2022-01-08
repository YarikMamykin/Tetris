import { Cell } from '@/store/common/cell.js'
import { Coords } from '@/store/common/coords.js'
import { GameOver, OverFlow, MapFailure } from '@/store/common/errors/game_errors'


class Matrix {

  constructor(rows, cols) {
    if(rows === 0 || cols === 0) throw new Error('Invalid Matrix size specified!');

    this.rows = rows;
    this.cols = cols;
    this.cells = [];

    for(let i = 0; i < rows; ++i) {
      this.cells.push([]);
      for(let j = 0; j < cols; ++j) {
        this.cells[i].push(new Cell(new Coords(i, j), 'unset'));
      }
    }
  }

  cell(row, col) {
    return this.cells[row][col];
  }

  toArray() {
    let result = [];

    for(let i = 0; i < this.rows; ++i) {
      for(let j = 0; j < this.cols; ++j) {
        result.push(this.cells[i][j]);
      }
    }

    return result;
  }

  resetCells(cells) {
    this.cells = cells;
  }

  check_mapping(matrix) {
    for(let row of matrix.cells) {
      for(let cell of row) {

        if(cell.coords.row < 0)
          throw new OverFlow();

        if(cell.coords.row > this.cells.at(-1).at(0).coords.row)
          throw new OverFlow();

        if(cell.coords.col > this.cells.at(-1).at(-1).coords.col)
          throw new OverFlow();
        
        if(cell.coords.col < 0)
          throw new OverFlow();

        const this_matrix_cell = this.cells[cell.coords.row][cell.coords.col];

        if(cell.color !== 'unset' && this_matrix_cell.color !== 'unset') {

          if(this_matrix_cell.coords.row === 0 || cell.coords.row === 0) 
            throw new GameOver();

          if(matrix.cells.at(0).at(0).coords.row === 0) 
            throw new GameOver();

          throw new MapFailure();
        }
      }
    }
  }

  map(matrix) {

    this.check_mapping(matrix);

    for(let row of matrix.cells) {
      for(let cell of row) {

        const this_matrix_cell = this.cells[cell.coords.row][cell.coords.col];

        if(this_matrix_cell.color === 'unset') {
          this_matrix_cell.color = cell.color;
        }
      }
    }
  }

  pretty_map(matrix) {
    // Assuming all cells are unset
    const rows = matrix.cells.length;
    const cols = matrix.cells.at(0).length;

    const this_rows = this.cells.length;
    const this_cols = this.cells.at(0).length;

    const rshift = (this_rows - rows === 1) ? (this_rows - rows) : (this_rows - rows - 1);
    const cshift = (this_cols - cols === 0) ? (this_cols - cols) : (this_cols - cols - 1);

    for(let row of matrix.cells) {
      for(let cell of row) {
        this.cells[cell.coords.row + rshift]
                  [cell.coords.col + cshift].color = cell.color;
      }
    }
    
  }

  unmap(matrix) {
    for(let row of matrix.cells) {
      for(let cell of row) {

        // if row or col index are less than 0 
        // this means that block is just-generated.
        // So it would be wize to skip its generation at all.
        if(cell.coords.row < 0) return;
        if(cell.coords.col < 0) return;

        // The block to be unmapped may be overflowing one.
        // So the following checks needed.
        if(cell.coords.row >= this.cells.length) continue;
        if(cell.coords.col >= this.cells.at(-1).length) continue;

        const this_matrix_cell = this.cells[cell.coords.row][cell.coords.col];

        if(cell.color !== 'unset') {
          this_matrix_cell.color = 'unset';
        }

      }
    }
  }

  clear() {
    this.cells.forEach((row)=> { row.forEach((cell) => { cell.color = 'unset'; }); }); 
  }


  static CreateArrayOfCellsFromRawArray(array) {

    const rows = array.length;
    const cols = array[0].length;

    let result = [];

    for(let i = 0; i < rows; ++i) {
      result.push([]);
      for(let j = 0; j < cols; ++j) {
        result[i].push(new Cell(new Coords(i, j), array[i][j]));
      }
    }

    return result;
  }
};

export { Matrix };
