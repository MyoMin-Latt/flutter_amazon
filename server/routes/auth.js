const express = require("express");
const User = require("../models/user");
const bcryptjs = require('bcryptjs');
const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log(req.body);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with same email already exist" });
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            name,
            email,
            password: hashedPassword,
        })
        user = await user.save();
        res.json(user)
    } catch (e) {
        res.status(500).json({ error: e.message });
    }


    // _version, id
    // Sting - Object
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
