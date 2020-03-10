
/**

Core Requirements
 Take a look at the documentation for the api first.
  It gives good examples of how to make calls to each endpoint,
   and shows the structure of the data.
Create a basic application and use fetch to pull a 
list of people or ships. Display this list in the browser
 window.

Remember that fetch returns a Promise, not the data! 
Also remember that we will need to tell fetch what type 
of data we are expecting: .text(), .json(), or .blob() so
 it can process it accordingly.

We can resolve(process) a Promise in one of two ways: 
either with a .then(), or with async/await. 
(MDN: Using Promises)
 * 
 */

 function getPerson(url)
 {
    return fetch(url).then((response) => 
    {
       if(response.ok)
       {
           console.log("The response is a promisse == ");
          return response.json(); 
       }else
       {
          throw new Error ("Server"+ 
          "not responding to fetch request for " + response); 
       } 
    }).catch((error) => 
       {
          console.log(error);
           
       }); 
 }

function buildInitialList()
{
   const listElement = document.getElementById("personsList");
   

   const baseURL = 'https://swapi.co/api/';
   const selectedItem = 'people';
  
   getPerson(baseURL + selectedItem).then(data => 
   {
      console.log("About to build the pokemons list");
      console.log(data);
      buildPersonsList(data.results);
   });   
}

function buildPersonsList (persons)
{
    const listElement = document.getElementById("personsList");
    listElement.innerHTML = persons.map( (item) => 
    {
    return `<button ontouchend=dowloadDetails("${item.url}")>${item.name}</button>`;
    }).join('');
}

function dowloadDetails(url)
{
    console.log(url);
    getPerson(url).then(data => {
      
      console.log("About to build the details list");
    console.log(data);      
      buildDetails(data)});    
  
}

function back()
{
   document.getElementById("main").classList.toggle("slide");

}
function buildDetails(details)
{
   document.getElementById("main").classList.toggle("slide");
   const listElement = document.getElementById("details");
   console.log(details);
    listElement.innerHTML = `<li><button ontouchend=back()> < Back </button></li>
    <li><h1>${details.name}</h1> </li> 
    <li> Hair color:${details.hair_color} </li>
    <li> Height: ${details.height} </li>
    <li> Mass: ${details.mass} </li>
    <li> Eye color:${details.eye_color} </li>`;


} 




 //only use await inside of a asyncronus function
 async function displayPersons2()
 {
    const personListArray = await getPerson(baseURL + selectedItem);
    buildPersonsList(data.results);   
 }
 
 