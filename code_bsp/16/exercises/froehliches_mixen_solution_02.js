let HonoluluFlipIngredients = ['Maracujasaft', 'Ananassaft', 'Zitronensaft', 'Grapefruitsaft', 'Crushed Ice'];

let myIngredients = ['Ananas', 'Maracujasaft', 'Sahne', 'Zitronensaft', 'Grapefruitsaft', 'Crushed Ice', 'Milch', 'Apfelsaft', 'Aperol', 'Ananassaft', 'Limetten', 'Zitronen'];

let isInMyIngredients = (ingredient) => myIngredients.indexOf(ingredient) !== -1;

console.log(HonoluluFlipIngredients.every(isInMyIngredients)); // => true