//The textbook gives this example as a "succinct" way to retrieve checkboxes selection
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
//The traditional would be 
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}

//Even though the first option is definately shorter I think the second is more explicit

/*
This uses the spread operator to turn the node 
list into an array. This then allows us to use 
the filter() method that returns an array 
containing only the check boxes that were checked 
(this is because their 'checked' property will be 
truthy). We then chain the map() method to the end,
 which replaces each checkbox in the array with its 
 'value' property. This array is then returned and 
 stored in the hero.powers variable.
*/

//This explanation helped, if the behaviors of 
//the Array methods are clear it is easier to 
//understand this code

//I'm happy to use Object Oriented programming with JavaScript
//The explanation on the textbook about prototypes is not so clear
/**
They created a class with the attribute weapon honding a string */


//I played with the examples of chapter 12
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
const leo = new Turtle('Leonardo');
Turtle.prototype.weapon = 'Hands';
const raph = new Turtle('Raphael');

raph.__proto__;
{weapon: "Hands", constructor: ƒ, sayHi: ƒ, attack: ƒ}weapon: "Hands"constructor: class TurtlesayHi: ƒ sayHi()attack: ƒ attack()__proto__: Object
Turtle.prototype.weapon = '3oitao';
"3oitao"
raph.__proto__;
{weapon: "3oitao", constructor: ƒ, sayHi: ƒ, attack: ƒ}
leo.attack();
"Feel the power of my hands!"
raph.attack();
"Feel the power of my hands!"
let otherHero = new Turtle('otherHero');
undefined
otherHero.__proto__;
{weapon: "3oitao", constructor: ƒ, sayHi: ƒ, attack: ƒ}

//supposedly, when I do this:
Turtle.prototype.weapon = '3oitao';
//The weapon attribute in the next objects I create should be
// '3oitao' instead of the original 'hands'
//the prototype reflects the change:
raph.__proto__;
{weapon: "3oitao", constructor: ƒ, sayHi: ƒ, attack: ƒ}
//but the function call does not
raph.attack();
"Feel the power of my hands!"


//So what is the use for the prototype?
//The classes have their own attributes that are assigned
//upon creation, if an attribute has a defaut value specified in 
//the prototype it will be the same in every instance 
//of the class unless it is assigned individually. 
