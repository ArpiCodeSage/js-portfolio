//client.js

fetch('http://localhost:3000/test-api',
{
    method:'POST',
//     Specifies HTTP method

// Tells the server:

// “I am sending data to you”

// Must match server route:

// app.post('/test-api', ...)


// If you used GET here → server would not receive it.
    headers:
//     Headers = metadata(a set of data that describes and gives information about other data.) about the request
// They are not the main data — that’s the body.
{
        'Content-Type':'application/json',
//         Tells server:

// “The body I’m sending is JSON”

// This is CRITICAL because:

// app.use(express.json())


// parses the body only if content-type is JSON.

// Without this:

// req.body === {}

        'Authorization':'Bearer my secret-token',
//         Custom authentication header

// Format:

// Authorization: Bearer <token>


// Used in:

// JWT auth

// API security

// Middleware checks

// In your server:

// req.headers.authorization


// will contain:

// Bearer my-secret-token

        'Custom-Header':'helloworld'

// Completely user-defined header

// Browsers allow custom headers

// Useful for:

// flags

// versioning

// debugging

// feature toggles

// Accessible on server as:

// req.headers['custom-header']
    },
    body:JSON.stringify({message:'HELLO API'})
//     What’s happening here?

// fetch cannot send raw objects

// You must send a string

// JSON.stringify(...)

// Converts:

// { message: 'Hello API!' }


// into:

// {"message":"Hello API!"}

// On the server:
// req.body = { message: 'Hello API!' }

})
.then(response=>response.json())
.then(data=>console.log('response:',data))
.catch(error=>console.error('error:',error))
console.log("client is runnign")