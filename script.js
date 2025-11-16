let ham = document.querySelector('.hamburger');
let over = document.querySelector('.overlay');
let cross = document.querySelector('.cross');
let sidemenu = document.querySelector('.sidemenu');
let trail = document.querySelector('.reallist')
let cover = document.querySelector('.coverannounce');
ham.addEventListener('click', ()=>{
    over.style.display="inline-block";
    sidemenu.classList.add("addanim");
    sidemenu.classList.remove("adan")
});
cross.addEventListener('click',()=>{
    sidemenu.classList.remove("addanim")
    sidemenu.classList.add("adan");
    over.style.display="none";
});

