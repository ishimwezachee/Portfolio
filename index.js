const humberg = document.querySelector('.navigation');
const navList = document.querySelector('.nav-list');
const times = document.querySelector('.times');
const navLink = document.querySelectorAll('.nav-link');
const modal = document.querySelector('.modal')
const btn = document.querySelectorAll('.btn-project');
const span = document.querySelector('.close');



function closeNavItems() {
  navList.classList.replace('column', 'nav-list');
  navList.style.display = '';
}
humberg.addEventListener('click', () => {
  navList.classList.replace('nav-list', 'column');
  times.classList.add('fa-times');
  navList.style.display = 'block';
});

times.addEventListener('click', () => {
  closeNavItems();
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 600) {
      closeNavItems();
    }
  });
});

btn.forEach(button=>{
  button.addEventListener('click',function(){
    modal.style.display ="block"
  })
})

span.addEventListener('click',function(){
  modal.style.display = "none";
})

window.addEventListener('click',function(event){
  if (event.target == modal) {
        modal.style.display = "none";
      }
})