//Task class: represents a task
class Task{
  constructor(item, dueDate){
    this.item=item;
    this.dueDate=dueDate;
  }
}

//UI class: handle UI tasks
class UI{
  static displayTasks(){
    const StoredTasks = Store.getTasks();

    const tasks = StoredTasks;

    tasks.forEach((task => UI.addTaskToList(task)));
  }

  static addTaskToList(task){
  const list = document.querySelector('#task-list');

  const row = document.createElement('tr');

  row.innerHTML = `
   <td>${task.item}</td>
   <td>${task.dueDate}</td>
   <td><a href ="#" class = "btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);
}
static deleteTask(el){
  if(el.classList.contains('delete')){
    el.parentElement.parentElement.remove();
  }
}
static showAlert(message, className){
   const div = document.createElement('div');
   div.className = `alert alert-${className}`;
   div.appendChild(document.createTextNode(message));
   const container = document.querySelector('.container');
   const list = document.querySelector('#list');
   table.insertBefore(div, list);

   //Vanish after 3 sec
   setTimeout(()=>document.querySelector('.alert').remove(), 3000);
 }
 static clearFields() {
    document.querySelector('#item').value = '';
    document.querySelector('#dueDate').value = '';

  }
}
// Store Class: Handles Storage
class Store{
  static getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')== null){
      tasks =[];
    }
    else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addTask(task){
    const tasks = Store.getTasks();

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  static removeTask(dueDate){
    const tasks = Store.getTasks();

    tasks.forEach((task, index)=>{
      if(task.dueDate == dueDate){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }
}

//Events: Display TaskList
document.addEventListener('DOMContentLoaded', UI.displayTasks);

//Events: Add a task
document.querySelector('#task-form').addEventListener('submit', (e) => {

  //Prevent actual submit
  e.preventDefault();

  //Get form values
  const item = document.querySelector('#item').value;
  const dueDate = document.querySelector('#dueDate').value;


  //Validate
  if(item ==''||dueDate==''){
    UI.showAlert('Please fill out all fields', 'danger');
  }
  else{
    //Instantiate task
    const task = new Task(item, dueDate);

    //Add task to UI
    UI.addTaskToList(task);

    //Add task to Store

    Store.addTask(task);

    //Show success
    UI.showAlert('Task Added', 'success');

    //Clear fields
    UI.clearFields();
  }

});

//Event: Remove an task
document.querySelector('#task-list').addEventListener('click', (e) => {
  UI.deleteTask(e.target)

  //Remove task from list
  Store.removeTask(e.target.parentElement.previousElementSibling.textContent);
  //Show successful deleteion
  UI.showAlert('Task deleted', 'success');

});
