

export function qs(query)
{
    console.log("Utilities = return element" + document.querySelector(query));
    return document.querySelector(query);
}

export function qsA(query)
{
    return document.querySelectorAll(query);
}

export function bindTouch (selector, callback)
{
    console.log("bindTouch == About to bind the listener");
   qs(selector).addEventListener('touchend', (e) => 
   {
      console.log("Button clicked");
      callback();
      //add prevent default
   });
   /*qs(selector),addEventListener("click", e => {
       callback();
   });*/
}