const express = require("express");

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    // get the data from client
    // post that data in database
    // return that dtat to the user
})




// middleware
// authRouter.get('/user', (req, res) => {
//     res.json({ route: "Good Morning" });
// })
module.exports = authRouter;
