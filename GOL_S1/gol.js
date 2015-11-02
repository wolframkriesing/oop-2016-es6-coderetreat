"use strict";

const assert = require('assert');

describe('GoL session 1, no loops', () => {

  it('finds the first cell to touch', () => {
    const cells = [[3, 4], [5, 6]];
    assert.equal(leftBorder(cells), 3);
  });

  it('finds the left border', () => {
    const cells = [[1, 1], [0, 0]];
    assert.equal(leftBorder(cells), 0);
  });

  it('finds the upper border', () => {
    const cells = [[1, 2], [0, 1]];
    assert.equal(upperBorder(cells), 1);
  });

  it('finds the last cell to touch', () => {

  });

  xit('touches all cells', () => {
    
    let touchedCells = [];
    
    assert.deepEqual(touchedCells, [1,2,3,4,5,6,7,8]);
  });
  
});

const DIMENSION_X = 0;
const DIMENSION_Y = 1;
const leftBorder = cells => minBorder(cells, DIMENSION_X);
const upperBorder = cells => minBorder(cells, DIMENSION_Y);
const minBorder = (cells, dimension) => cells.reduce((prev, cell) => Math.min(cell[dimension], prev[dimension]))

map = new Map();
map.set(cell, neighborCount);
map.entries(cell, count => count === 0 ? cell.dies() : cell.survives())

