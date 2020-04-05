import queSobroDonteView from "./queSobroDonteView.js";
import queSobroDonte from "./queSobroDonte.js";
import { qs } from "./utilities.js";
export default class queSobroDonteController
{
   constructor ()
   {
      this.model = new queSobroDonte();
      this.view = new queSobroDonteView();    
   }
   
   async handleSearch (ingredients)
   {
      if (ingredients[0].length >= 3)
      {
         const searchResults = await this.model.search(ingredients);
         this.view.displaySearchResults(searchResults);  
      }      
   }

   async showRecipe(id)
   {
      //get the instructions
      const stepsJSON = await this.model.getSteps(id);
      const ingredientsJSON = await this.model.getIngredients(id);
      //now that the data is gathered call the view
      const noteString = await this.model.getNote(id);
      console.log('Controller showRecipe note == ' + noteString );
      console.log(noteString);
      
      
      //add the event listener to add the note  
      this.view.displayRecipe(ingredientsJSON, stepsJSON, noteString);
   }

   async buildSavedRecipesList()
   {
      const listSaved = await this.model.getListOfSavedRecipes();
      this.view.displaySavedList(listSaved);

   }

   async saveRecipe ()
   {
      const recipeId = document.getElementById('idPlaceHolder').innerHTML;
      const newNote =  document.getElementById('noteText').value;
      this.model.saveRecipe(recipeId, newNote);
   }
}


