// How the data will be stored on MongoDB. The Schema, as they call it.
// Which datatypes will be included in each item on the database
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        // A string will be used to show what the make is
        required: true
        // we ALWAYS want to know what make a car is
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
    sauce: {
        type: String,
        required: true
    },
    cone: {
        type: String,
        required: true
    },
    conesize: {
        type: String,
        required: true
    },
    flavour: {
        type: String,
        required: true
    },
    restrictions: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Product", ProductSchema);