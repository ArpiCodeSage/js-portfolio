//SENDING CUSTOM HEADERS WITH FETCH API

const express=require('express');
 //Loads the Express framework from node_modules

// Express helps you:

// create servers

// handle HTTP requests (GET, POST, etc.)

// send responses easily

//Think of express as a factory function that creates a server app.
const app=express();
// Calls the express() function

// This creates an Express application object

// app now represents your server

// You’ll use app to:

// add middleware(a "software glue" layer that connects different applications, databases, and systems, allowing them to communicate and share data seamlessly)

// define routes

// start listening on a port
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Custom-Header");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(express.json())
// express.json()

// Returns a middleware function

// This middleware:

// reads the incoming request body

// if it’s JSON → converts it into a JS object

// attaches it to req.body

// Without this:

// req.body === undefined

// app.use(...)

// Registers middleware

// Runs for every incoming request

// Executes before route handlers

// 📌 In short:

// This line allows your server to read JSON sent by the client.


app.post('/test-api',(req,res)=>{
//     app.post

// Defines a POST route

// '/test-api'

// URL path

// Full URL becomes:

// http://localhost:3000/test-api


// (req, res) => { ... }

// Callback function that runs when a POST request hits this path

// req (request object)

// Contains:

// headers

// body

// params

// query

// res (response object)

// Used to:

// send data back

// set status codes

// end the request
    console.log('received headers:',req.headers);
//     Logs all HTTP headers sent by the client

// req.headers is an object like:

// {
//   host: 'localhost:3000',
//   content-type: 'application/json',
//   user-agent: 'PostmanRuntime/7.36.0'
// }


// This is useful for:

// debugging

// authentication

// content-type checks
    console.log('received body:',req.body)
//     Logs the parsed JSON body

// Works only because of:

// app.use(express.json());


// Example request body:

// {
//   "name": "Arpita",
//   "role": "student"
// }


// Then:

// req.body = { name: 'Arpita', role: 'student' }
    res.json({message:'headers received successfully!',receivedHeaders:req.headers})
})
// res.json(...)

// Sends a JSON response

// Automatically:

// converts object → JSON

// sets Content-Type: application/json

// ends the response
const port=3000;
// Stores port number

// Port = entry point where server listens

// 3000 is common for local development
app.listen(port,()=>{
//     Starts the server

// Tells Node:

// “Listen for incoming HTTP requests on port 3000”

// Without this line:
// ❌ Server will never start
    console.log(`server running on http://localhost:${port}`)
})
// This file:

// Creates an Express server that accepts POST requests, reads JSON data, logs headers & body, and sends a JSON response back.