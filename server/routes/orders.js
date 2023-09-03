// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const OrderSchema = require('../models/orders.js');

// Initialize the router
const router = express();

// Get all
router.get('/api/order_get_all/', async (req, res) => {
    const findOrder = await OrderSchema.find();
    res.json(findOrder);
});

// Get Single. The ID is a Param, as anything after /: is a parameter. Req is short for request, not require.
router.get('/api/order_get_single/:id', async (req, res) => {
    const findOrder = await OrderSchema.findById(req.params.id)
    res.json(findOrder)
});

// Update. You can use .put or .patch
router.put('/api/order_update/:id', async (req, res) => {
    const { id } = req.params.id;
    await OrderSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// Create
router.post('/api/order_add/', async (req, res) => {
    const car = new OrderSchema({

        client: req.body.client,
        orders: req.body.orders,
        totalprice: req.body.totalprice

    });
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error)) // status 500 is an internal service error
});

//Delete
router.delete('/api/order_delete/:id', async (req, res) => {
    await OrderSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;