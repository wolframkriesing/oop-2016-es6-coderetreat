"use strict";

let result;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = "Hi this is a short text";
let names = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];

//double
result = inputs.map((v) => v * 2);
console.log(result); // => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//squares
result = inputs.map((x) => x * x);
console.log(result); // => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//evens
result = inputs.filter((x) => x % 2 === 0);
console.log(result); // => [2, 4, 6, 8, 10]

//sum
result = inputs.reduce((sum, x) => sum + x, 0);
console.log(result); // => 55

//product
result = inputs.reduce((sum, x) => sum * x, 1);
console.log(result); // => 3628800

//longest word length
result = text.split(' ')
  .map((x) => x.length)
  .reduce((longest, x) => Math.max(longest, x));
console.log(result); // => 5

//longest word
result = text.split(' ')
.reduce((res, w) =>  res.length > w.length ? res : w);
console.log(result); // => short

//avg word length
result = text.split(' ')
  .map((x) => x.length)
  .reduce((sum, x) => sum +x, 0) /
  text.split(' ').length;
console.log(result); // => 3

//sort by 3rd letter
let result = names.sort(
  (a, b) => a.charAt(2) > b.charAt(2)
);
console.log(result); // => [ "Ladislaus", "Friedlinde", "Heribert", "Tusnelda", "Oswine" ]

// Are there names with more than 8 letters?
let result = names.some((name) => name.length > 8)
console.log(result); // => true


// Has every name at least 8 letters?
let result = names.every((name) => name.length > 8)
console.log(result); // => true


// map via reduce
let myMap = (array, f) =>
  array.reduce((res, elem) => res.concat(f(elem)), []);
result = myMap(inputs, (v) => v * 2);
console.log(result); // => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

