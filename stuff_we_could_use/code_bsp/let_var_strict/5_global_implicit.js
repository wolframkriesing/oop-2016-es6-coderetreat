//"use strict";

let x = () => {
  a = 3;
}

let y = () => {
  console.log(a); // => 3
}

x(); 
y();

console.log(a); // => 3