//stack traces usually point to the exact error or close to it 

//The strict mode was a helpful addition and it is good to have it activated by default we we use modules

//Linting toos work like  css or html validators

//I always felt like not using new features until they are widely supported unless it is something crucial to my project

//google chrome coupled with the console are my best tools in debugging

//exceptions are something new in javascript to me, especially with js being so volatile opposed to java or c++

//Test driven programming looks really helpful using the jest library

function addAndSubtractOne (a,b){
    return (a + b) - 1;
}

test('add 4 to 5 and subtract 1 is 8', () => {
    expect(addAndSubtractOne(4,5).toBe(8));
});