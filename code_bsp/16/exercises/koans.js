"use strict";

let result;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = "Hi this is a short text";

//double
result = inputs.map((v) => /* ??? */ * 2);
console.log(result); // => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//squares
result = inputs.map(/* ??? */);
console.log(result); // => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//evens
result = inputs./* ??? */;
console.log(result); // => [2, 4, 6, 8, 10]

//sum
result = inputs./* ??? */;
console.log(result); // => 55

//product
result = inputs./* ??? */;
console.log(result); // => 3628800

//longest word length
result = text./* ??? */;
console.log(result); // => 5

//longest word
result = text./* ??? */;
console.log(result); // => short

//avg word length
result = text./* ??? */;
console.log(result); // => 3

//sort by 3rd letter
let result = names.sort(
  (a, b) => /* ??? */ > /* ??? */
);
console.log(result); // => [ "Ladislaus", "Friedlinde", "Heribert", "Tusnelda", "Oswine" ]

// Are there names with more than 8 letters?
let result = /* ??? */ name.length > 8)
console.log(result); // => true

// Has every name at least 8 letters?
let result = /* ??? */ name.length > 8)
console.log(result); // => false

// map via reduce
let myMap = /* ??? */;	
result = myMap(inputs, (v) => v * 2);
console.log(result); // => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
