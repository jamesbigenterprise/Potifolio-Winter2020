//Notes

// Arrays are special objects to store data
const emptyArray = new Array();
emptyArray[1] = "second item";
emptyArray[0] = "first item";
emptyArray[2] = "third item";

//the array destruction can be handy for quick swaps
let [a,b] = [1,2];
[a,b] = [2,1];

//I wonder if this can be done with varibles created otherwise
let separeteVar = "value0";
let separateVar1 = "value1";
[separeteVar, separeteVar1] = ["value1", "value0"];

//I didn't know arrays had the same capabilities of advanced data structures in languges like C++
//like pop, push, shift and unshift

const lehiSons = ["Laman", "Lemuel", "Sam", "Nephi"];
//With splice we can add items to specific places in the array
//keeping the original content
lehiSons.splice(2,0, 'Joseph'); // Added Joseph right next to Sam

//Removing content
lehiSons.splice(0,2, 'Jacob');//We removed 2 items starting on zero
//Laman and Lemuel will not receive the same blessings as their brethren

//We can use includes to check if an item is in the array
const LemuenInheritance = lehiSons.includes("Lemuel"); //it will not be in the array so it will return false
//sure enough, Lemuel lost his inheritance

//multiDimentional arrays can be helpful to store data with several levels
const apartment4 = [['Nathan', 'David', 'Ben', 'Ran', 'James'], ['Lamoni', 'Jack', 'Drake'], ['Moroni', 'Sam', 'Edward', 'Jacob']];

//If the data was inputed sequecially you could find the first tenant of the first apartment of this building
let fistsTennant = apartment4[0][0];

//With the spread operator we can flatten the multidimentional arrays
const allTennants = [...apartment4];     


//A new thing to me was that we cant add several strings at once as you create the set
//this would store each character separately
let letters = new Set('world');
//Using the add we can add strings
let words = new Set().add('hello').add('world');
//another interesting use for the spread operator
const wordsArray = [...words]; //now the set is an Array

function quizNinja(){
    const quiz = [
        ["What is Superman's real name?","Clark Kent"],
        ["What is Wonder Woman's real name?","Diana Prince"],
        ["What is Batman's real name?","Bruce Wayne"]
    ];

    let score = 0 // initialize score
    for(const [question, answer] of quiz)
    {
        const response = prompt(question);
        if (response == answer){
            score++;
            alert("Correct!");
        }
        else
        {
            alert("Sorry, the correct answer was: " + answer)
        }
    }
    //alert("Game Over \n You Scored " + score + " Point" + score === 1?".":"s.");
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}