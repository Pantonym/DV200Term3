const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model("Car", CarSchema)