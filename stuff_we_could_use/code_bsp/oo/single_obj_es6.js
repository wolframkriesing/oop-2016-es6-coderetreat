let product = {
  title: 'Tv',
  price: 100,
  display() {
    console.log(this.title + " (" + product.price + "€)");
  }
};

product.display();
