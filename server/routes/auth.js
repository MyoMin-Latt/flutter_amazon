const express = require("express");

const authRouter = express.Router();

authRouter.get('/user', (req, res) => {
    res.json({ route: "Good Morning" });
})
module.exports = authRouter;
