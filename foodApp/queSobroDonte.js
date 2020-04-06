import { getJSON } from './utilities.js';

const baseUrl = 'https://api.spoonacular.com/recipes/';
const key = '&apiKey=0d58533dcd474e84868551cf8484b069';
const search = '/findByIngredients?ingredients=';
const ingredients = '/information?';
const instructions = '/analyzedInstructions?';
const bulk = 'informationBulk?ids=';

 /*
   * queSobroDonte
   * 
   * Model of the App
   * Handle data requests using the spoonacular API
   * Handle local storage 
   */
export default class queSobroDonte
{

   constructor()
   {
      this.savedRecipes = undefined;
    if (localStorage.getItem('savedRecipes') === null)
    {
       localStorage.setItem('savedRecipes', '[]');
       this.savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    }else 
    {
        this.savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    } 
   }

   /*
   * getSummary
   * 
   * Download a bulk of recipes based on the ids in the list
   */
   async getSummary(idList)
    {
        const data = await getJSON(baseUrl + bulk + idList +key);
        return data;
    }

   /*
   * search
   * 
   * Use the provided list of ingredients to download recipes
   */
   async search(ingredients)
   {
       
      const ingredientsAdded = ingredients.join(',');
      const data = await getJSON(baseUrl + search + ingredientsAdded + key);
       data.forEach(recipe => {
       });
       return data;
   }

   /*
   * getSteps
   * 
   * Download the steps based on the provided id
   */
   async getSteps(recipeID)
   {
      const data = await getJSON(baseUrl + recipeID + instructions + key);
       return data;
     
   }

  /*
   * getIngredients
   * 
   * Download the ingredients based on the provided id
   */
    async getIngredients(recipeID)
    {
        const data = await getJSON(baseUrl + recipeID + ingredients + key);
        return data;
    }

  /*
   * getListOfSavedRecipes
   * 
   * Get the ids from local storage and download the recioes
   */
    async getListOfSavedRecipes()
    {

      let ids = ''; 
      this.savedRecipes.forEach(s => {
          ids += s.id + ',';
      });
       return  this.getSummary(ids);   
    }
    
  /*
   * getNote
   * 
   * Get the note from local storage using the id 
   */
    async getNote(recipeID)
    {
        let output = '';
        this.savedRecipes.forEach(note => {
           if (note.id === recipeID)
           {
            const str = note.note; 
              output =  str;  
           }
       });  
       return output; 
    }

  /*
   * saveRecipe
   * 
   * Create an object with the id and note
   * Save it to local storage
   */
    saveRecipe(recipeID, newNote)
    {
        const savedRecipe = {
            id: recipeID, note: newNote
        };
        this.savedRecipes.push(savedRecipe)
        this.updateLocalStorage();    
    }

   /*
   * updateLocalStorage
   * 
   * Update the data stored in local storage
   */
    updateLocalStorage()
    {
       localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));
    }
}


