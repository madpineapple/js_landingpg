// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name');

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

// get name
function getName(){
  if (localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  }else{
    name.textContent= localStorage.getItem('name');
  }
}

//setTodo
function setName(e){
  if(e.type === 'keypress'){
    //Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }

  }else{
    localStorage.setItem('name', e.target.innerText);
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);


//Run
showTime();
setBGGreet();
getName();
