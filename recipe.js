'use strict';
var recipe = {};

function addIngredient(recipe, ingr, amounts) {
  recipe[ingr] = amounts;
  return recipe;
}

function removeIngredient(recipe, ingr) {
  delete recipe[ingr];
  return recipe;
}

function updateIngredient(recipe, ingr, amounts) {
    recipe[ingr] = amounts;
    return recipe;
  }

function readRecipe(recipe) {
  var string = "this recipe calls for ";
  for (var key in recipe){
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
}
