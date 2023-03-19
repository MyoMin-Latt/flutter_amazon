const express = require("express");
const auth = require('../middlewares/auth')
const userRouter = express.Router();
const { Product } = require("../models/product");
const User = require("../models/user");

userRouter.post("/api/add-to-cart", auth, async (req, res) => {
    // console.log(`add-to-cart > start`);
    try {
        const { id } = req.body;
        const product = await Product.findById(id);
        let user = await User.findById(req.user);

        if (user.cart.length == 0) {
            user.cart.push({ product, quantity: 1 });
        } else {
            let productList = user.cart;
            for (let i = 0; i < productList.length; i++) {
                if (user.cart[i].product._id.equals(product._id)) {
                    user.cart[i].quantity = user.cart[i].quantity + 1;

                    console.log(`isProuctFound : index ${i} : product: ${user.cart[i]}`);
                    break;
                }
            }
        }
        user = await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = userRouter;