import { bindTouch } from "./utilities.js";
import {qs, qsA} from './utilities.js';

//Attributes
let TodosArray = undefined;
if (localStorage.getItem('todoArray') === null)
{
   localStorage.setItem('todoArray', '[]');
   TodosArray = JSON.parse(localStorage.getItem('todoArray'));
}else 
{
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
 * Filter tasks (checked, unchecked) hising classes
********************************************************/
export default class TodoApp 
{
   constructor ()
   {
      bindTouch('#newTodoButton', this.addNewTodo.bind(this));
      bindTouch('#active', this.hideCompleted.bind(this));
      bindTouch('#completed', this.hideActive.bind(this)); 
      bindTouch('#all', this.showAll.bind(this));
      this.listTodos(TodosArray);
   }

   /******************************************************
   * LISTTODOS
   * *****************************************************
   * This method will display the tasks
   * Make changes according to the data
   * Add the necessary event listeners
   *******************************************************/
   listTodos(todosToDisplay)
   {  
      const unorderedList = qs('#todoList');
      unorderedList.innerHTML = '';
      let tasksLeft = 0;
      
      //create a todo list item with the appropriate listeners
      todosToDisplay.forEach(todo => {
       const item = document.createElement('li');
       item.innerHTML = 
        `<button class="ck" > </button>
        <p class="task">${todo.text}</p>
        <button id=${todo.id} class="delete">X</button>`;
       item.firstChild.addEventListener('click', checkTask => this.checkTodo(todo.id));
       item.lastElementChild.addEventListener('click', removeTask => this.removeTodo(todo.id));
       todo.checked ? item.classList.add("checked") : item.classList.add("active");
       //Add the checked character to the button
       todo.checked ? item.firstChild.innerHTML = "&#10003;" : item.firstChild.innerHTML = "";
       //count another active task to display
       todo.checked ? "":tasksLeft++;
       unorderedList.appendChild(item);
      });
      //Display the counter
      qs("#counter").innerHTML = tasksLeft + " Tasks Left";
   }

   /******************************************************
   * HIDECOMPLETED
   * *****************************************************
   * This method will toggle classes to hide the completed 
   * tasks
   *******************************************************/
    hideCompleted()
    {    
      qs('#todoList').classList.toggle("hideCompleted");
      qs('#todoList').classList.remove("hideActive");
    }

    /******************************************************
   * HIDEACTIVE
   * *****************************************************
   * This method will toggle classes to hide the Active 
   * tasks
   *******************************************************/   
    hideActive()
    {  
      qs('#todoList').classList.toggle("hideActive");
      qs('#todoList').classList.remove("hideCompleted");
    }

   /******************************************************
   * SHOWALL
   * *****************************************************
   * This method will toggle classes to show all tasks
   *******************************************************/    
    showAll()
    {  
      qs('#todoList').classList.remove("hideActive");
      qs('#todoList').classList.remove("hideCompleted");
    }

   /******************************************************
   * ADDNEWTODO
   * *****************************************************
   * This method will call savetodo with the iputed text,
   * erase the input box and call listTodos
   *******************************************************/   
   addNewTodo()
   {
      //get text 
      const todoText = qs('#newTodo');
      //save to database
      this.saveTodo(todoText.value);
      
      //erase textbox
      qs("#newTodo").value = "";

      //list todos
      this.listTodos(TodosArray);
   }

   /******************************************************
   * REMOVETODO
   * *****************************************************
   * This method will use an id to find and remove the 
   * todo. Update the Ids to cover the empty spot left.
   * Refresh the local storage an display the
   * new list
   *******************************************************/
   removeTodo(id)
   {
      TodosArray.splice(id, 1);
      //Update the id's
      for (let i = 0; i < TodosArray.length; i++)
      {
         TodosArray[i].id = i;
      }
      updateLocalStorage();
      this.listTodos(TodosArray);
   }

   /******************************************************
   * CHECKTODO
   * *****************************************************
   * This method will use the id to find and check the 
   * selected id
   *******************************************************/
   checkTodo(id)
   {
      if (!TodosArray[id].checked)
      {
         TodosArray[id].checked = true;
      }else
      {
         TodosArray[id].checked = false;
      } 
      updateLocalStorage();
      this.listTodos(TodosArray);
   }
   
   /******************************************************
   * SAVETODO
   * *****************************************************
   * This method will create a task object with the 
   * provided text, save it in the TodosArray and refresh 
   * the local storage
   *******************************************************/
   saveTodo(toDo)
   {
   const task ={
      id: TodosArray.length,
      checked: false,
      text: toDo
   };
   TodosArray.push(task);
   updateLocalStorage();
   }
}