// Imports from packages
const express = require('express');
const mongoose = require('mongoose');

// Imports from other files
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

// Init
const app = express();
const PORT = process.env.PORT || 3000;
const DB = "mongodb+srv://myominlatt330:8nwu8vgDBiEdwr9R@cluster0.hwbhxtj.mongodb.net/?retryWrites=true&w=majority" // if password contain '@', can face this error MongoAPIError: URI must include hostname, domain name, and tld
// const DB = "mongodb+srv://myominlatt330:8nwu8vgDBiEdwr9R@cluster0.hwbhxtj.mongodb.net/?retryWrites=true&w=majority" // if password contain '@', can face this error MongoAPIError: URI must include hostname, domain name, and tld

// middleware
// Client -> middleware ->  Server -> Client
app.use(express.json());
app.use(authRouter); // Q, how about user
app.use(adminRouter);
// app.use('/api/v1/auth', authRouter); // Q, how about user
app.use(productRouter);
app.use(userRouter);

// connections
mongoose.connect(DB).then(() => {
    console.log("Conection Successful");
}).catch((e) => {
    console.log(e);
})

















// solution1
// app.get('/', (req, res) => {
//     res.json({ name: "U Aye" })
// })

// Creating an api
// app.get('/hello-world', (req, res) => {
//     // res.send("Hello World"); // text
//     res.json({ 'hi': "Hello World" }); // json
// })
// Get, put, post, delete, update -> CRUD

app.listen(PORT, "0.0.0.0", () => // Q2 - what for 0.0.0.0
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




