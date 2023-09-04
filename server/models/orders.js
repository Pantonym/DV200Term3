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
    totalprice: {
        type: String,
        required: true
    }

});
// Clients will always be added by their emails as emails may never be repeated.

// Orders will be formatted as such:
// 1. Only one client email will be added, as well as only one total price.
// 2. The Order section will be formatted in EXACTLY this format:
// 2.1) "name, price, sauce, cone, conesize, restrictions, quantity; name, price, sauce, cone, conesize, restrictions, quantity; etc."
// 2.2) This is to make it easier to break into sections to calculate and display on other pages. A for loop will run through and collect each item using the commas as a landmark.

module.exports = mongoose.model("Order", OrderSchema);