
let Product = function(title, price) {
  this.title = title;
  this.price = price;
};

Product.prototype.display = function() {
  console.log(this);
  console.log(this.title + " (" + this.price + " €)");
}


let p = new Product('TV', 100);

let p2 = new Product('TV', 100);


p.display();