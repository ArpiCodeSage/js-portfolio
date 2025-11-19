const btn=document.querySelector("button");
btn.textContent="CALCULATE";
const container=document.querySelector(".container");
const height=document.querySelector("#height");
const weight=document.querySelector("#weight");
const p=document.createElement("p");

btn.addEventListener("click",()=>{
    calculate(height.value,weight.value);
    height.value="";
    weight.value="";
    
})
function calculate(height,weight)
{
    if(isNaN(height) || isNaN(weight)){
        p.textContent="ENTER VALID INPUT";
        return;
    }
    const bmi=weight/Math.pow(height,2);
    if(bmi<18.5)
        p.textContent="UNERWEIGHT";
    else if(bmi>=18.5 && bmi<=24.9)
                p.textContent="NORMAL WEIGHT";

    else if(bmi>=25 && bmi<=29.9)
                p.textContent="OVERWEIGHT";

    else if(bmi>=30)
               p.textContent="OBESITY";

    container.appendChild(p);
}