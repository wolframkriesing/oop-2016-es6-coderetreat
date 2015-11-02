let HonoluluFlipIngredients = ['Maracujasaft', 'Ananassaft', 'Zitronensaft', 'Grapefruitsaft', 'Crushed Ice'];

let casualFridayIngredients = ['Wodka', 'Limettensaft', 'Apfelsaft', 'Gurke'];

let pinkDollyIngredients = ['Wodka', 'Orangensaft', 'Ananassaft', 'Grenadine', 'Sahne', 'Kokossirup'];

let cocktailRecipes = [HonoluluFlipIngredients, casualFridayIngredients, pinkDollyIngredients];

let myIngredients = ['Ananas', 'Maracujasaft', 'Sahne', 'Zitronensaft', 'Grapefruitsaft', 'Crushed Ice', 'Milch', 'Apfelsaft', 'Aperol', 'Ananassaft', 'Limetten', 'Zitronen'];

let isInMyIngredients = (ingredient) => myIngredients.indexOf(ingredient) !== -1;

let isMixable = (cocktail) => cocktail.every(isInMyIngredients);

console.log(cocktailRecipes.filter(isMixable)[0].join()); // => "Maracujasaft,Ananassaft,Zitronensaft,Grapefruitsaft,Crushed Ice"
