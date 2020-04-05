import { getJSON } from './utilities.js';

const baseUrl = 'https://api.spoonacular.com/recipes/';
const key = '&apiKey=0d58533dcd474e84868551cf8484b069';
const search = '/findByIngredients?ingredients=';
const ingredients = '/information?';
const instructions = '/analyzedInstructions?';
const bulk = 'informationBulk?ids=';


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
    
    const savedRecipe = {
        id:123232, note: "I really liked this recipe"
    }; 
   }

   async getSummary(idList)
    {
        const data = await getJSON(baseUrl + bulk + idList +key);
        return data;
    }

   async search(ingredients)
   {
       
      const ingredientsAdded = ingredients.join(',');
      //search
      const data = await getJSON(baseUrl + search + ingredientsAdded + key);
      //const data = await getJSON('./ingredientsSearch.json');
       data.forEach(recipe => {
       });
       return data;
   }

   async getSteps(recipeID)
   {
      const data = await getJSON(baseUrl + recipeID + instructions + key);
      //const data = await getJSON('./instructions.json');
       return data;
     
   }

    async getIngredients(recipeID)
    {
        const data = await getJSON(baseUrl + recipeID + ingredients + key);
        //const data = await getJSON('./ingredients.json');
        return data;
    }

    

    async getListOfSavedRecipes()
    {

      let ids = ''; 
      this.savedRecipes.forEach(s => {
          ids += s.id + ',';
      });
        console.log(ids);
        
       return  this.getSummary(ids);   
    }
    
    async getNote(recipeID)
    {
        console.log('Getting note recipeID == ' + recipeID);

        let output = '';
        this.savedRecipes.forEach(note => {
            console.log(typeof recipeID + ' ' +recipeID);
            console.log(typeof note.id + ' ' + note.id);
            console.log(note.id === recipeID);
            
           if (note.id === recipeID)
           {
            const str = note.note; 
              console.log('returning note');
              console.log(str);   
                           
              output =  str;  
           }
       });  
       return output; 
    }

    saveRecipe(recipeID, newNote)
    {
        console.log('queSobroDonte saveRecipe recipeID == ' + recipeID + ' newNote == ' + newNote);
        
        const savedRecipe = {
            id: recipeID, note: newNote
        };
        this.savedRecipes.push(savedRecipe)
        this.updateLocalStorage();    
    }

    updateLocalStorage()
    {
       localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));
    }
}


