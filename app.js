// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  todo = document.getElementById('todo');

//Show time
function showTime(){
  let today= new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();


//Set 24 hr
hour = hour % 24||24;

//Output time
time.innerHTML =`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);

}
//Add zero
function addZero(n){
  return(parseInt(n, 10)<10? '0': '')+n;
}
//Set background
function setBGGreet(){
  let today = new Date();
   hour = today.getHours();

  if(hour<12){
    //Morning
    document.body.style.backgroundImage="url('img/morning.jpg')";
    greeting.textContent ='Good Morning';
  }else if(hour<18){
    //Afternon
    document.body.style.backgroundImage="url('img/afternoon.jpg')";
    greeting.textContent ='Good Afternon';
  }else{
    //Evening
    document.body.style.backgroundImage="url('img/evening.jpg')";
    greeting.textContent ='Good Evening';
  }
}


// get to do list
function getTodo(){
  if (localStorage.getItem('todo') === null){
    todo.textContent = '[Enter task]';
  }else{
    todo.textContent= localStorage.getItem('todo');
  }
}
todo.addEventListener('keypress', setTodo);
todo.addEventListener('blur', setTodo);
//setTodo
function setTodo(e){
  if(e.type === 'keypress'){
    //Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('todo', e.target.innerText);
      todo.blur();
    }

  }else{
    localStorage.setItem('todo', e.target.innerText);
  }
}

//Run
showTime();
setBGGreet();
getTodo();
