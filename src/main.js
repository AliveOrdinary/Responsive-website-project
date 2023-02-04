let opnBtn = document.querySelector('.bi-list');
let closeBtn = document.querySelector('.bi-x-lg');

let menu = document.querySelector('.navbar__menu')

opnBtn.addEventListener('click',()=>{
    opnBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})
closeBtn.addEventListener('click',()=>{
    opnBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})