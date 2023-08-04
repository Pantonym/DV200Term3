// How the data will be stored on MongoDB. The Schema, as they call it.
// Which datatypes will be included in each item on the database
const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    make: {
        type: String,
        // A string will be used to show what the make is
        required: true
        // we ALWAYS want to know what make a car is
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Car", CarSchema);