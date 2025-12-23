
const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select")
let i = 0;
const fromcurr=document.querySelector(".from select")
const finalmsg=document.querySelector(".msg")
const tocurr=document.querySelector(".to select")

for (let select of dropdowns)//we only have 2 dropdowns
{
    for (let currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if (select.name === "from" && currcode === "USD" || (select.name === "to" && currcode === "INR"))
            newoption.selected = "selected"
        select.append(newoption)
    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target)

    }
    )

}
const updateFlag = (element) => {
    let currcode = element.value;
    let countryCode = countryList[currcode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;


}
const btn = document.querySelector("#btn");
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let amount = document.querySelector(".amount input")
    let amt = amount.value;
    if (amt === "" || amt < 1) {
        amt = 1;
        amount.value = 1;
    }
    const mainurl=`${url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
    let response=await fetch(mainurl)
    let data=await response.json();
    let rate=data[tocurr.value.toLowerCase()]
    console.log(data)
    let finalamt=rate*amt;
    finalmsg.innerText=`${amt}/${fromcurr.value}=${finalamt} ${tocurr.value}`

})

