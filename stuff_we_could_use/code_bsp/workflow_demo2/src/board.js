"use strict";

//import Board from './board.js';

"use strict";

class Product {
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }

    get title() {
      return this._title.toUpperCase();
    }

    set title(newTitle) {
      if (newTitle === '') throw 'Kein LEERER String im Title'
      this._title = newTitle;
    }

    display() {
        console.log(`${this.title} (${this.price}€)`);
    }
}

class Book extends Product {

  display() {
      super.display();
      console.log(`${this.title} (${this.price}€) BOOK`);
  }

}


let p3 = new Book('mein toller TV', 100);

p3.title = 'mein tolles Buch';

console.log(p3.title);





/*
describe("bla", () => {
  it("should blub", () => {
    expect(2).toEqual(1 + 1);
  });
});

describe("something", () => {
  it("should", () => {
    expect((new Board()).x).toEqual(27);
  });
});
*/
