let menu = document.getElementById('button-ham')
          
menu.addEventListener('click', (e)=>{
  e.preventDefault();
const menubar = document.querySelector('.Navigator');
if(menubar.classList.contains('mostrarmenu')){
  menubar.classList.remove('mostrarmenu')
} else{
menubar.classList.add('mostrarmenu') }



});