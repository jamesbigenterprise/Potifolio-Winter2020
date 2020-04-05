/*
* queSobroDonteView
* 
* Display search results, recipes and saved recipes
*/

export default class queSobroDonteView
{

    /*
    * displayRecipe
    * 
    * Organize the ingredients, instructions and the note for display
    */
    displayRecipe(ingredientsJSON, stepsJSON, note)
    {
        const ingredients = ingredientsJSON.extendedIngredients.map((ingredient) => {
            return `<li> ${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong} ${ingredient.name}</li>`;
         } ).join('');
         const steps = stepsJSON[0].steps.map((step) => {
            return `<li> ${step.number} ${step.step} </li>`;
         } ).join('');
        
        let displayResults = `<h1>${ingredientsJSON.title}</h1>
        <img src="${ingredientsJSON.image}" alt="Dish image">
        <p>Servings: ${ingredientsJSON.servings}</p>
        <p>Ready in ${ingredientsJSON.readyInMinutes} Minutes</p>
        <a href="${ingredientsJSON.sourceUrl}">Source: ${ingredientsJSON.creditsText} </a>
        <h2>Ingredients</h2>
        <ul id="ingredientsList">
            ${ingredients}
        </ul>
        <h2>Instructions</h2>
        <ul id="steps">
            ${steps}
        </ul>
        <p id="idPlaceHolder">${ingredientsJSON.id}</p>
        <p> ${note}</p>`;      
        
        document.getElementById('recipe').innerHTML = displayResults;
        document.getElementById("main").classList.toggle("slide");    
    }

    /*
    * displaySavedList
    * 
    * take a list of recipes from the searcg  and display their image and name
    */
    async displaySearchResults(searchResults)
    {
        const displayResults = await searchResults.map(recipe => {
            return `<li> <button class="result" id="${recipe.id}" style="background-image: url(${recipe.image})"> ${recipe.title}</button></li>`; });
          document.getElementById('results').innerHTML = displayResults.join(''); 
           
        
    }

    /*
    * displaySavedList
    * 
    * take a list of recipes and display their image and name
    */
    async displaySavedList(savedList)
    {
        const displayResults = await savedList.map(recipe => {
            return `<li> <button class="result" id="${recipe.id}" style="background-image: url(${recipe.image})"> ${recipe.title}</button></li>`; });
          document.getElementById('myRecipes').innerHTML = displayResults.join('');  
          document.getElementById("main").classList.toggle("slide2");  
        
    }
}