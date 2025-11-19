const body = document.body;
const themeBtn = document.getElementById("theme-toggle");

const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

themeBtn.addEventListener("click",()=>{
    body.classList.toggle("dark");
})

openBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})


function closemodal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeBtn.addEventListener("click",closemodal);
overlay.addEventListener("click",closemodal);

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape")
        closemodal();
})