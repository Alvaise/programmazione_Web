/**
 * @file: 01-the-recipe card.js
 * @author: Alvise Spadea
 * Exercise on object in Javascript
 * 
 * Create an object to hold information on your favorite recipe. It should have
 * properties for title (a string), servings (a number), and ingredients (an
 * array of strings).
 * On separate lines (one console.log statement for each), log the recipe
 * information 
 */
let favRecipe = {
    title: '',
    serving: 0,
    ingredients: []
};

favRecipe.title='Negroni'
favRecipe.serving=1
favRecipe.ingredients=[' 30ml Gin',' 30ml Bitter','30ml Sweet Vermouth'];

console.log(favRecipe.title);
console.log(favRecipe.serving);
console.log(favRecipe.ingredients);


