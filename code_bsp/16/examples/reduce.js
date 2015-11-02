
let cartItemPrices = [9.99, 19.99, 5.99];
let add = (a, b) => a + b;

let sum = (values) => values.reduce(add, 0);  

/*
let sum = (values) => {
  let sum = 0;
  for (var i = 0; i < values.length; ++i) {
    sum += values[i];
  }
  return sum;  
}
*/
console.log(sum(cartItemPrices)); // => 35.97