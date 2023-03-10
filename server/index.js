// Imports from packages
const express = require('express');

// Imports from other files
const authRouter = require("./routes/auth")

// middleware
// Client -> Server -> Client

// Init
const PORT = 3000;
const app = express();

// Creating an api
app.get('/hello-world', (req, res) => {
    // res.send("Hello World"); // text
    res.json({ 'hi': "Hello World" }); // json
})
// Get, put, post, delete, update -> CRUD

app.listen(PORT, () =>
    console.log(`Connected at port ${PORT}`)
);












// // 1: 10: 00
// console.log('Hello World');

// const express = require('express');

// const PORT = 3000;
// const app = express();

// // Creating an api
// // http://<youripaddress>/hello-world
// app.get("/hello-world", (req, res) => {
//     // res.send("Hello world");
//     res.json({ 'hi': "Hello World" });
// })

// app.get('/', (req, res) => {
//     res.json({ 'name': "Myo Min Latt" });
// })

// // Get, Post, Put, Delete, Update -> CRUD


// app.listen(PORT, "0.0.0.0", () =>
//     console.log(`Connected at port ${PORT}`)
// );




