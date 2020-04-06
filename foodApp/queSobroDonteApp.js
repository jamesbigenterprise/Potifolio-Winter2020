import queSobroDonteController from './queSobroDonteController.js';
import { qs } from "./utilities.js";


const cont = new queSobroDonteController();

document.getElementById('search').addEventListener('keyup', (e) => {
    let ingredients = [];
    ingredients = qs('#search').value.split(' ');
    cont.handleSearch(ingredients);
})

document.getElementById('results').addEventListener('click', (e) =>{
    cont.showRecipe(e.target.id);
} ); 

document.getElementById('myRecipes').addEventListener('click', (e) =>{
    document.getElementById("main").classList.toggle("slide2");
    cont.showRecipe(e.target.id);
} ); 


qs('#addNote').addEventListener('click', () => cont.saveRecipe());
qs('#addToMyRecipesButton').addEventListener('click', () => cont.saveRecipe());

qs('#myRecipesButton').addEventListener('click', () => cont.buildSavedRecipesList());
qs('#backHomeButton').addEventListener('click', () => {document.getElementById("main").classList.toggle("slide");});
qs('#backResults').addEventListener('click', () => {document.getElementById("main").classList.toggle("slide2");});
