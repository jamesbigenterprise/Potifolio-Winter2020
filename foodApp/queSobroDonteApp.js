import queSobroDonteController from './queSobroDonteController.js';
import { qs } from "./utilities.js";


const cont = new queSobroDonteController();

document.getElementById('search').addEventListener('keyup', (e) => {
    console.log(qs('#search').value);
    let ingredients = [];
    ingredients = qs('#search').value.split(' ');
    console.log(ingredients);
    cont.handleSearch(ingredients);
})

document.getElementById('results').addEventListener('click', (e) =>{
    cont.showRecipe(e.target.id);
} ); 


qs('#addNote').addEventListener('click', () => cont.saveRecipe());


qs('#myRecipesButton').addEventListener('click', () => cont.buildSavedRecipesList());

//cont.buildSavedRecipesList();