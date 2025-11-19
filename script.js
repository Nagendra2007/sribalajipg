let cross = document.querySelector('#cross');
let sidemenu = document.querySelector('.sidemenu');
let overlay = document.querySelector('.overlay');
let ham = document.querySelector("#hamburger");
let trail = document.querySelector('.checktime');
let announce = document.querySelector('.annouoverlay');
let page1 = document.querySelector('#page1');
let page2 = document.querySelector('#page2');
let page3 = document.querySelector('#page3');
let pages = document.querySelectorAll('.page')
let page4 = document.querySelector('#page4');
let page5 = document.querySelector('#page5')
ham.addEventListener('click',()=>{
        sidemenu.classList.add("sideanim");
        overlay.style.display="block"
})
 cross.addEventListener('click',()=>{
       overlay.style.display="none";
 });
 let pageopen=(e)=>{
      let currentpage = e.target;
      let id = e.target.getAttribute("id");
              if(id==="foodmenu"){
                  pages.forEach(page=>{
                        page.style.display="none";
                  });
                  page2.style.display="block";
                  overlay.style.display="none";
              }
              if(id==="mytimetable"){
                   pages.forEach(page=>{
                        page.style.display="none";
                  });
                  page3.style.display="block"
                  overlay.style.display="none";
              }
              if(id==="home"){
                  location.reload();
              }
              if(id==="profile"){
                   pages.forEach(page=>{
                        page.style.display="none";
                  });
                  page4.style.display="block";
                  overlay.style.display="none";
              }
              if(id==="contactus"){
                  pages.forEach(page=>{
                        page.style.display="none";
                  });
                  page5.style.display="block";
                  overlay.style.display="none";
              }
 }
 let options = document.querySelectorAll('.option');
 options.forEach(option=>{
      option.addEventListener('click',pageopen);
 });
