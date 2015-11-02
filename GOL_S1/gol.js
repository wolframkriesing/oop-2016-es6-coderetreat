"use strict";

const assert = require('assert');

describe('GoL session 1, no loops', () => {

  it('finds the first cell to touch', () => {
    const cells = [[3, 4], [5, 6]];
    assert.deepEqual(firstCell(cells), [3, 4]);
  });

  it('finds the first cell to touch', () => {
    const cells = [[1, 1], [0, 0]];
    assert.deepEqual(firstCell(cells), [0, 0]);
  });

  it('finds the last cell to touch', () => {

  });

  xit('touches all cells', () => {
    
    let touchedCells = [];
    
    assert.deepEqual(touchedCells, [1,2,3,4,5,6,7,8]);
  });
  
});

const firstCell = cells =>
    cells.reduce( (prev, cell) => Math.min(prev[0], cell[0]) === prev[0] ? prev : cell )
