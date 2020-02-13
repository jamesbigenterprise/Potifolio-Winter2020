import { bindTouch } from "./utilities.js";
import {qs, qsA} from './utilities.js';

//Attributes
let TodosArray = undefined;
console.log(localStorage.getItem('todoArray'));
if (localStorage.getItem('todoArray') === null)
{
   localStorage.setItem('todoArray', '[]');
   console.log("Creating a new local storage");
   console.log(localStorage.getItem('todoArray'));
   TodosArray = JSON.parse(localStorage.getItem('todoArray'));

}else 
{
   console.log("This is what we currently have at the local storage" 
   + localStorage.getItem('todoArray'));
   TodosArray = JSON.parse(localStorage.getItem('todoArray'));
} 

function updateLocalStorage()
{
   localStorage.setItem('todoArray', JSON.stringify(TodosArray));
}
/********************************************************
 * TODOAPP
 * *****************************************************
 * This class will handle the TodoApp
 * Add tasks
 * Remove Tasks
 * Complite tasks
 * Filter tasks (checked, unchecked)
********************************************************/

 
export default class TodoApp 
{
   constructor ()
   {
      console.log("TodoApp Constructor == Binding the listener");
      bindTouch('#newTodoButton', this.addNewTodo.bind(this));

   }
   listTodos(todosToDisplay)
   {
      console.log(todosToDisplay);   
   }
   addNewTodo()
   {
      //get text 
      const todoText = qs('#newTodo');
      //save to database
      this.saveTodo(todoText.value);
      
      //list todos
      this.listTodos(TodosArray);

      //erase textbox
      qs("#newTodo").value = "";

   }
   removeTodo(itemToRemove)
   {

   }
   checkTodo(itemChecked)
   {

   }
   
   saveTodo(toDo)
   {
   const task = [false, toDo];
   //Todo actually saving in the database

   //Temporary
   //this.TodosList.push(task);
   console.log(typeof(TodosArray));
   TodosArray.push(task);
   updateLocalStorage();
   }
}

//private methods


