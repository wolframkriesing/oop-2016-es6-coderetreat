let city = ['Barcelona', 'Basel', 'Belgrade', 'Berlin', 'Budapest'];
let country = ['Belgium', 'Bulgaria', 'Brazil', 'Bolivia', 'Bosnia and Herzegovina'];
let river = ['Bode', 'Brahmaputra', 'Beuvron', 'Black River', 'Belaja'];


let sortByLength = (category) => category.sort((a, b) => b.length - a.length);

console.log(sortByLength(city));
console.log(sortByLength(country));
console.log(sortByLength(river));