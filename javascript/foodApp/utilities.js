

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

export async function getJSON(url)
{
   const response =  await fetch(url, 
    {method: 'GET',
    cache:'no-cache',
    headers:{
        'Content-type': 'application/json'
    },
});
   return await response.json();
}




async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }