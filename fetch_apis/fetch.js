//fetch returns promises
const url="https://jsonplaceholder.typicode.com/posts";

let promise=fetch(url)
console.log(promise)

// const getAdvice=async()=>{
//     console.log("getting data...")
//     let promise=await fetch(url);
//     console.log(promise)//JSON formatS
//     console.log(promise.status)
//     let data=await promise.json();
//     console.log(data[0])
//     advpara.innerText=data[0].innerText

// }

function getAdvice(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        advpara.innerText=data[5].title;
    })
}
//AJAX: asynchronous js & xml(it's json instead of xml nowS)
//JSON: javascript object notation
//json(): returns a second promise that resolves with the result of parsing the response body text as json.(input is json, output is js object)

const advpara=document.querySelector("#para")

const btn=document.querySelector("#btn");
btn.addEventListener("click",getAdvice)
 