const express = require("express");
const User = require("./models/user");

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;
    User
    // console.log(req.body);
    // get the data from client
    // post that data in database // weak password 6 char, same account with email
    // return that dtat to the user
})




// middleware
// authRouter.get('/user', (req, res) => {
//     res.json({ route: "Good Morning" });
// })
module.exports = authRouter;
