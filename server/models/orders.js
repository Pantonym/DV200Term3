const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({

    client: {
        type: String,
        required: true
    },
    orders: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    totalprice: {
        type: String,
        required: true
    }

});

// Only one client ID will be added. Orders will be a collection of Product ID's separated by a comma and a space. Quantity will be the amount of each product also separated by a comma and a space.

module.exports = mongoose.model("Order", OrderSchema);