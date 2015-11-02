"use strict";

let customers = ['Heribert', 'Friedlinde', 
                 'Tusnelda', 'Oswine (Admin)', 'Ladislaus']

let compareChatMembers = (a, b) => {
  if (isAdmin(a)) return -1; 
  if (isAdmin(b)) return 1;
  return a > b;
}

let isAdmin = (name) => name.includes("(Admin)");


console.log(customers.sort(compareChatMembers));