let x = () => {
  console.log(a); // => ReferenceError: can't access lexical declaration 'a' before initialization
  let a = 1; 
}

x(); 