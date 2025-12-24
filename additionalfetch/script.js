const query="twilight"
const url=`http://www.omdbapi.com/?apikey=4ed78efc&s=${query}`;
fetch(url)
.then(response=>{
    if(response.ok)
        //Checks if the HTTP response status is in the range of 200–299, indicating success.
    {
        return response.json();
    }
    else{
        throw new Error('network response was not okay')
    //If the status code indicates an error (e.g., 404 or 500), an error is thrown to handle it.
    }
})
.then(data=>console.log(data))
.catch(error=>console.error('there was a problem with the fetch operation:',error))

async function getP(){
    //This defines an asynchronous function, meaning it can handle tasks like fetching data without blocking the rest of the program.
    try{
        const response=await fetch(url);
        //The await keyword pauses the function until the fetch() request is complete, so the data can be used right after it’s retrieved.
        if(response.ok)
        {
            const data=await response.json()
            console.log(data)
        }
        else{
            throw new Error("failed to fetch data")
        }
    }
    catch(error){
        console.log('Error:',error)
    }
}

