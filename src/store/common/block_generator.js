import { TetrisBlock } from '@/store/common/tetris_block';
import { Matrix } from '@/store/common/matrix';

class BlockGenerator {
  constructor() {
    this.blocks = [

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'green', 'green', 'unset' ],
        [ 'unset', 'green', 'green' ],
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'yellow', 'yellow' ],
        [ 'yellow', 'yellow' ],
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'unset', 'blue', 'blue' ],
        [ 'blue', 'blue', 'unset' ],
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'lightgreen', 'lightgreen' ],
        [ 'lightgreen', 'lightgreen' ],
        [ 'lightgreen', 'lightgreen' ]
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'magenta','unset','unset','unset',],
        [ 'magenta','magenta','magenta','magenta' ]
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'red', 'red', 'red', 'red' ],
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'unset', 'unset', 'unset', 'cyan' ],
        [ 'cyan', 'cyan', 'cyan', 'cyan' ]
      ])),

      new TetrisBlock(Matrix.CreateArrayOfCellsFromRawArray([
        [ 'purple', 'purple', 'purple' ],
        [ 'unset',   'purple', 'unset' ],
      ])),

    ];
  }

  generate() { 
    const index = this.getRandomIndex(-this.blocks.length, this.blocks.length);
    return TetrisBlock.copy(this.blocks.at(index));
  }
  
  getRandomIndex(min, max) {
    return Math.random() * (max - min) + min;
  }
};

export { BlockGenerator };
