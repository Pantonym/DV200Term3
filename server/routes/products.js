// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const ProductSchema = require('../models/products.js');

// Initialize the router
const router = express();

// Get all
router.get('/api/products_get_all/', async (req, res) => {
    const findAllProducts = await ProductSchema.find();
    res.json(findAllProducts);
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
    const newProduct = new ProductSchema({
        name: req.body.name,
        tagline: req.body.tagline,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        variations: {
            sauce: {
                chocolate: req.body.variations.sauce.chocolate,
                vanilla: req.body.variations.sauce.vanilla,
                caramel: req.body.variations.sauce.caramel
            },
            cone: {
                yoghurt: {
                    small: req.body.variations.cone.yoghurt.small,
                    medium: req.body.variations.cone.yoghurt.medium,
                    large: req.body.variations.cone.yoghurt.large
                },
                waffle: {
                    small: req.body.variations.cone.waffle.small,
                    medium: req.body.variations.cone.waffle.medium,
                    large: req.body.variations.cone.waffle.large
                },
                bucket: {
                    small: req.body.variations.cone.bucket.small,
                    medium: req.body.variations.cone.bucket.medium,
                    large: req.body.variations.cone.bucket.large
                }
            }
        }
    });

    await newProduct.save()
        .then(item => res.json(item))
        .catch(error => res.status(500).json(error)) // status 500 is an internal service error
});

//Delete
router.delete('/api/product_delete/:id', async (req, res) => {
    await ProductSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;