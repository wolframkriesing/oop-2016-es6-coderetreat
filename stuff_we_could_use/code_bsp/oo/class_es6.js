"use strict";

class Product {
    constructor(options) {
        
        this.title = options.title || 'Produktname nicht vergeben';
        this.price = options.price || 20;
    }

    display() {
      console.log(this.title + " (" + this.price + " €)");
    }
}


let p3 = new Product({title: 'TV'});

p3.display();
