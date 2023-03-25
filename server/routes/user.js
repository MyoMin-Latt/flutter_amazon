const express = require("express");
const auth = require('../middlewares/auth')
const userRouter = express.Router();
const { Product } = require("../models/product");
const User = require("../models/user");

userRouter.post("/api/add-to-cart", auth, async (req, res) => {
    console.log(`add-to-cart > start`);
    try {
        const { id } = req.body;
        console.log(`add-to-cart > req body > ${id}`);
        const product = await Product.findById(id);
        console.log(`add-to-cart > product > ${product}`);
        let user = await User.findById(req.user);

        if (user.cart.length == 0) {
            console.log(`add-to-cart > cart length > ${user.cart.length}`);
            user.cart.push({ product, quantity: 1 });
        } else {
            console.log(`add-to-cart > cart length > zero > ${user.cart.length}`);
            let productList = user.cart;
            for (let i = 0; i < productList.length; i++) {
                if (user.cart[i].product._id.equals(product._id)) {
                    console.log(`add-to-cart > product found > ${user.cart.length}`);

                    user.cart[i].quantity = user.cart[i].quantity + 1;

                    console.log(`isProuctFound : index ${i} : product: ${user.cart[i]}`);
                    break;
                } else {
                    user.cart.push({ product, quantity: 1 });
                    console.log(`add-to-cart > product not found > ${user.cart.length}`);
                }
            }
        }
        user = await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.delete("/api/remove-from-cart/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        let user = await User.findById(req.user);

        for (let i = 0; i < user.cart.length; i++) {
            if (user.cart[i].product._id.equals(product._id)) {
                if (user.cart[i].quantity == 1) {
                    user.cart.splice(i, 1);
                } else {
                    user.cart[i].quantity -= 1;
                }
            }
        }
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = userRouter;