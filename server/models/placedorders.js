const mongoose = require('mongoose');

const PlacedOrderSchema = mongoose.Schema({

    clientName: {
        type: String,
        required: true
    },
    clientAddress: {
        type: String,
        required: true
    },
    orderName: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("PlacedOrder", PlacedOrderSchema);