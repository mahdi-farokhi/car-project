const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


let searchBtn=document.querySelector('.searchBtn');
let  closeBtn=document.querySelector('.closeBtn');
let searchBox =document.querySelector('.searchBox');    
searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBox.classList.add('active');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBox.classList.remove('active');
}

const text = document.querySelector(".sec-text");
const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "مکانیکی";
    }, 0);
    setTimeout(() => {
        text.textContent = "انژکتوری";
    }, 4000);
    setTimeout(() => {
        text.textContent = "آموزشی";
    }, 8000);
}
textLoad();
setInterval(textLoad,11000);