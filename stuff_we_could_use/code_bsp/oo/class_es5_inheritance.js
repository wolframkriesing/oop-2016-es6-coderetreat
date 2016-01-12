"use strict";

const Product = function(title, price) {
  this.title = title;
  this.price = price;
};

Product.prototype.display = function() {
    console.log(this.title + '(' + this.price + '€)');
};

const Book = function(titel, price, numPages) {
    this.title = title;
    this.price = price;
    this.numPages = numPages;
}

Book.prototype = new Product(/* sometime with params */);

//let p = new Product('TV', 100);
let b = new Book('The Hobbit', 20, 350)
