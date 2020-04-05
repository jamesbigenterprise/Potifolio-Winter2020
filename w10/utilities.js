

export function qs(query)
{
    return document.querySelector(query);
}

export function qsA(query)
{
    return document.querySelectorAll(query);
}

export function bindTouch (selector, callback)
{
   qs(selector).addEventListener('touchend', (e) => 
   {
      callback();
   });
}