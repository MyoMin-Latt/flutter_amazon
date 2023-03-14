const express = require("express");
const adminRouter = express.Router();
const admin = require("../middlewares/admin");
const Product = require("../models/product");

// Add product
adminRouter.post('/admin/add-product', admin, async (req, res) => {
    try {
        const { name, description, quantity, images, category, price } = req.body;
        console.log(`add-product > images > ${images}`);
        let product = new Product({
            name,
            description,
            images,
            quantity,
            price,
            category,
        });
        console.log(`add-product > ${product}`);
        product = await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all your products for admin
// admin/get-products
adminRouter.get('/admin/get-products', admin, async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = adminRouter;