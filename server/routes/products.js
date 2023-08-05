// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const ProductSchema = require('../models/products.js');

// Initialize the router
const router = express();

// Get all
router.get('/api/products_get_all/', async (req, res) => {
    const findProduct = await ProductSchema.find();
    res.json(findProduct);
});

// Get Single. The ID is a Param, as anything after /: is a parameter. Req is short for request, not require.
router.get('/api/product_get_single/:id', async (req, res) => {
    const findProduct = await ProductSchema.findById(req.params.id)
    res.json(findProduct)
});

// Update. You can use .put or .patch
router.put('/api/product_update/:id', async (req, res) => {
    const { id } = req.params.id;
    await ProductSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// Create
router.post('/api/product_add/', async (req, res) => {
    const car = new ProductSchema({ ...req.body });
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error)) // status 500 is an internal service error
});

//Delete
router.delete('/api/product_delete/:id', async (req, res) => {
    await ProductSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;