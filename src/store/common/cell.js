import { Coords } from '@/store/common/coords'

class Cell {
  constructor(coords, color) {

    if(coords.constructor.name !== 'Coords') 
      throw new Error('Please use Coords class!');

    this.coords = coords;
    this.color = color;
  }

  static copy(cell) {
    return new Cell(new Coords(cell.coords.row, cell.coords.col), cell.color);
  }
};

export { Cell };
