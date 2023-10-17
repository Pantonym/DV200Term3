// How the data will be stored on MongoDB. The Schema, as they call it.
// Which datatypes will be included in each item on the database
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        // A string will be used to show what the name is
        required: true
        // we ALWAYS want to know what a product's name is
    },
    tagline: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    variations: {
        sauce: {
            chocolate: {
                type: Number
            },
            vanilla: {
                type: Number
            },
            caramel: {
                type: Number
            }
        },
        cone: {
            yoghurt: {
                small: {
                    type: Number
                },
                medium: {
                    type: Number
                },
                large: {
                    type: Number
                }
            },
            waffle: {
                small: {
                    type: Number
                },
                medium: {
                    type: Number
                },
                large: {
                    type: Number
                }
            },
            bucket: {
                small: {
                    type: Number
                },
                medium: {
                    type: Number
                },
                large: {
                    type: Number
                }
            }
        }
    },
    image: {
        type: String,
        required: false
    }
});

// Each item has a predestined flavour, which is designated by the name.
// The only changeable flavour will be for the sauce.

module.exports = mongoose.model("Product", ProductSchema);