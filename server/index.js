// Basic Uses
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { log } = require('console');

// Route Uses
const productRoute = require('./routes/products');
const userRoute = require('./routes/users');
const orderRoute = require('./routes/orders');
const placedOrderRoute = require('./routes/placedorders.js');

// Same as require("dotenv").config();
require('dotenv/config');

const app = express();

// Used with React
// mitigates Cors issues that you _might_ get. Must be placed above express.json and routes, otherwise it will not work
app.use(cors({
    // where the communication comes from the client side
    origin: 'http://localhost:3000' //change if the port changes to 3001, etc. Delete all terminals and restart servers to reset back to port 3000.
}));

// Allows you to access images in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// makes the json data work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Must be below the express
app.use(productRoute);
app.use(userRoute);
app.use(orderRoute);
app.use(placedOrderRoute);

//goes to env file and pulls correct details from it, and connects to the mongo instance
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DV200T3', //--How the db will be named on mongo's side as well. NB MUST BE THE SAME.
}).then(() => {
    console.log("Connected to the DB")
})
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000; // Can change if the port changes (to 5001, 5002, etc)
// if the port doesn't work, delete all terminals on the lower right had side
app.listen(PORT, () => { console.log('server has started at port:', PORT) });