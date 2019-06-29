//modal code
document.getElementById('mButton').addEventListener('click',
function(){
  document.querySelector('.bg-modal').style.display= "flex";
});

document.querySelector('.close').addEventListener('click',
function(){
  document.querySelector('.bg-modal').style.display="none";
});
document.querySelector('.add').addEventListener('click',
function(){
  document.querySelector('.bg-modal').style.display="none";
});
