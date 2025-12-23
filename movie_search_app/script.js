const form=document.getElementById("searchbar");
const btn=document.getElementById("btn");
const input=document.getElementById("search");
const results = document.getElementById("results");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const query=input.value.trim();;

    if(!query)
        return;
    console.log("searching for:",query)
    getmovie(query);
})

async function getmovie(query){
    const url=`http://www.omdbapi.com/?apikey=4ed78efc&s=${query}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        results.innerHTML="";
        if(data.Response==="True")
        {
            data.Search.forEach(movie=>{
                const div=document.createElement("div");
                div.innerHTML=`
                <h3>${movie.Title}
                ${movie.Year}
                ${movie.imdbID}</h3>
                <img src="${movie.Poster}" width="100">
                `;
                results.appendChild(div)
            })
        }
        else
        {
            results.innerText="no results found"
        }

    })

}