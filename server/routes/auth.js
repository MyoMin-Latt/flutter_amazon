const express = require("express");
const User = require("../models/user");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const authRouter = express.Router();


// Sign Up
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
});

// Sign In Route
// Exercise
authRouter.post("/api/signin", async (req, res) => {
    console.log(`api/signin > req > ${req}`);
    try {
        const { email, password } = req.body;
        // console.log(`api/signin > req in try > ${req}`);
        // console.log(`api/signin > email,password > ${email}, ${password}`);
        // console.log(`api/signin > req.body > ${req.body}`);
        const user = await User.findOne({ email });
        // console.log(`api/signin > user > ${user}`);
        if (!user) {
            return res
                .status(400)
                .json({ msg: "User with this email does not exist!" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        // console.log(`api/signin > isMatch > ${isMatch}`);
        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect password." });
        }

        const token = jwt.sign({ id: user._id }, "passwordKey");
        const usertoken = jwt.sign({ id: user }, "passwordKey");
        // console.log(`api/signin > token > ${token}`);
        // console.log(`api/signin > usertoken > ${usertoken}`);
        res.json({ token, ...user._doc });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

authRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        // console.log(`token : ${token}`);
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        // console.log(`verified : ${verified}`);

        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        res.json(true);
    } catch (error) {
        res.status(500).json({ error: e.message });
    }
});

// get user data
authRouter.get('/', auth, async (req, res) => {
    // console.log(`/, auth > ${req.user}`);
    const user = await User.findById(req.user);
    res.json({ ...user._doc, token: req.token }) // TODO: Q3,  ...user._doc
});




// middleware
// authRouter.get('/user', (req, res) => {
//     res.json({ route: "Good Morning" });
// })
module.exports = authRouter;
