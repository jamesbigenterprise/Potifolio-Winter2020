import queSobroDonteView from "./queSobroDonteView.js";
import queSobroDonte from "./queSobroDonte.js";
import { qs } from "./utilities.js";

/*
* queSobroDonteController
* 
* Handle the information between the model and the view
*/
export default class queSobroDonteController
{
   constructor ()
   {
      this.model = new queSobroDonte();
      this.view = new queSobroDonteView();    
   }
   
   /*
   * handleSearch
   * 
   * Take the ingredients and used the model to dowload the results
   * Use the view to display the results
   */
   async handleSearch (ingredients)
   {
      if (ingredients[0].length >= 3)
      {
         const searchResults = await this.model.search(ingredients);
         this.view.displaySearchResults(searchResults);  
      }      
   }

   /*
   * showRecipe
   * 
   * Use the provided ID to download the steps and ingredients with the model
   * Display them using the view
   */
   async showRecipe(id)
   {
      const stepsJSON = await this.model.getSteps(id);
      const ingredientsJSON = await this.model.getIngredients(id);
      const noteString = await this.model.getNote(id);
      this.view.displayRecipe(ingredientsJSON, stepsJSON, noteString);
   }

  /*
   * buildSavedRecipesList
   * 
   * Grab the saved recipes and use the view to display it
   */
   async buildSavedRecipesList()
   {
      const listSaved = await this.model.getListOfSavedRecipes();
      this.view.displaySavedList(listSaved);

   }

   /*
   * saveRecipe
   * 
   * Grab the recipe ID and the note
   * Use the model to save the recipe
   */
   async saveRecipe ()
   {
      const recipeId = document.getElementById('idPlaceHolder').innerHTML;
      const newNote =  document.getElementById('noteText').value;
      document.getElementById('noteText').value = '';
      this.model.saveRecipe(recipeId, newNote);
      this.showRecipe(recipeId);
      document.getElementById("main").classList.toggle("slide");
   }
}


