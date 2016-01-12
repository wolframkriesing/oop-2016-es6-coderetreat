var Product = function(title, price) {
  this.title = title;
  this.price = price;
};

Product.prototype.timedDisplay = function() {
    setTimeout(function() {alert(this.title + '(' + this.price + '€)')}, 1000);  //.bind(this)
};


let p = new Product('TV', 100);
p.timedDisplay();
