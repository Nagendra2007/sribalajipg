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
// Disable Ctrl + Scroll Zoom
document.addEventListener("wheel", function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Disable Ctrl + (+ - 0) Zoom
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (
        e.key === "+" ||
        e.key === "-" ||
        e.key === "=" || // for "+" without shift
        e.key === "0"
    )) {
        e.preventDefault();
    }
});

// Disable pinch zoom (trackpads)
document.addEventListener("touchmove", function (e) {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });


