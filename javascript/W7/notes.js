//set timeout defer execution until the stack is clear

//closure, reference to a variable created inside of a function, why would you want that?

//From the textbook: This means that whenever a function is defined inside another function, 
//the inner function will have access to any variables that are declared in the outer function's scope.

//This is my understandig about closures, if we have a nested function the child 
//function will retain access to the parent's variables even after the  parent has been executed.

//Generator
//We use the "*" character after the function keyword
//This function will have an infinite loop implementing a sequence
//it will have the keyword "yield" instead of "return" so it will stop after every iteration and return the current value
//to acess each value of the generator we call the "next()" method


//Currying
//Currying didn't seem that useful at first. With it we can create a functio n that returns another function 
//if part of the function parameters are ommited.
//This can be useful when we are using the same value in one of the parameters repeated times
//We save the default parameter and reuse the returned function with the new parameters


//This function will return a string concatenating the provided prefix with the provided name
//or a curry function with the predefined prefix waiting for the name
function namePrefix (prefix, name) 
{
   if (name === undefined)
   {
      return function (name)
      {
         return prefix + " " + name; 
      } 
   }else
   {
      return prefix + " " + name;
   } 
}

const prefixMIB = namePrefix("Agent");
//we can create agent names for all new employees at Men In Black inc
const willSmithMenInBlack = prefixMIB("Smith");




//AJAX helps on situations where we make a request and need to wait for a response before acting

let x = 1;
let y;
function call(x) 
{
    y = "request response";
}

function getJSON(url)
{
    return fetch(url).then((response)=> {
        console.log(response);
        if(response.ok)
        {
            return response.json();
        }else 
        {
           throw new Error('not ok');
           console.log('never run');
              
        }
    }).catch( (err) => {
        console.log(err);   
    });
    
}

getJSON('foods.json').then( (data) => {
    console.log(data);
    
})


function longPress()
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(true)
            {
                resolve(42); // sends it down as a response
            }else
            {
                reject('it didnt work');
            }
        }, 200);
    })
}

longPress().then( response =>{ //comes from resolve

    const total = 100 + response;
    console.log('total ' + total);
    
} );// we could nest the reject

const baseURL = 'https://pokeapi.co/api/v2/';
getJSON(baseURL + 'pokemon').then(data => {
    buildList(data.results);
});

function buildList(pokemons) {
    const element = document.querySelector('#listElement');
    element.innerHTML = pokemons.map( (item) => {
        return `<li> <a href="${item.url}">${item.name}</a></li>`;
    } ).join('');
}

//