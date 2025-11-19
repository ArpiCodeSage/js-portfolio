const btn=document.getElementById("btn");
const container=document.getElementById("container");

btn.addEventListener("click",handleclick);
function handleclick(){
    if(btn.innerText==="updated")
    {
        btn.innerText="CLICK ME";
    container.innerText="";
    return;
}

let text="updated";
btn.innerText=text;
 
handlecontainer();
}

function handlecontainer(){
    let content="the button has been updated";
    container.innerText=content;
}