// basic requires
const express = require('express');

// image upload uses
const multer = require('multer');
const path = require('path');

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
    res.json(findProduct);
});

//Middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

// Update. You can use .put or .patch
router.patch('/api/product_update/:id', upload.single('image'), async (req, res) => {
    const body = JSON.parse(req.body.data);
    const imageFile = req.file;
    
    let STOCK = +body.variations.cone.yoghurt.small + +body.variations.cone.yoghurt.medium + +body.variations.cone.yoghurt.large + +body.variations.cone.waffle.small + +body.variations.cone.waffle.medium + +body.variations.cone.waffle.large + +body.variations.cone.bucket.small + +body.variations.cone.bucket.medium + +body.variations.cone.bucket.large;

    const findProduct = await ProductSchema.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: body.name,
                tagline: body.tagline,
                description: body.description,
                price: body.price,
                stock: STOCK,
                variations: {
                    sauce: {
                        chocolate: body.variations.sauce.chocolate,
                        vanilla: body.variations.sauce.vanilla,
                        caramel: body.variations.sauce.caramel
                    },
                    cone: {
                        yoghurt: {
                            small: body.variations.cone.yoghurt.small,
                            medium: body.variations.cone.yoghurt.medium,
                            large: body.variations.cone.yoghurt.large
                        },
                        waffle: {
                            small: body.variations.cone.waffle.small,
                            medium: body.variations.cone.waffle.medium,
                            large: body.variations.cone.waffle.large
                        },
                        bucket: {
                            small: body.variations.cone.bucket.small,
                            medium: body.variations.cone.bucket.medium,
                            large: body.variations.cone.bucket.large
                        }
                    }
                },
                image: imageFile.filename
            }
        }
    )

    res.json(findProduct);
});

// Create
router.post('/api/product_add/', upload.single('image'), async (req, res) => {
    // The data was not being parsed - it was trying to read a a string like it was an object
    const body = JSON.parse(req.body.data);
    const imageFile = req.file;

    console.log('Body:');
    console.log(body);
    console.log('Image:');
    console.log(imageFile);

    const newProduct = new ProductSchema({
        name: body.name,
        tagline: body.tagline,
        description: body.description,
        price: body.price,
        stock: body.stock,
        variations: {
            sauce: {
                chocolate: body.variations.sauce.chocolate,
                vanilla: body.variations.sauce.vanilla,
                caramel: body.variations.sauce.caramel
            },
            cone: {
                yoghurt: {
                    small: body.variations.cone.yoghurt.small,
                    medium: body.variations.cone.yoghurt.medium,
                    large: body.variations.cone.yoghurt.large
                },
                waffle: {
                    small: body.variations.cone.waffle.small,
                    medium: body.variations.cone.waffle.medium,
                    large: body.variations.cone.waffle.large
                },
                bucket: {
                    small: body.variations.cone.bucket.small,
                    medium: body.variations.cone.bucket.medium,
                    large: body.variations.cone.bucket.large
                }
            }
        },
        image: imageFile.filename
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