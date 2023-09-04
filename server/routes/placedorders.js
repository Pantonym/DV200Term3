// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const OrderSchema = require('../models/placedorders.js');

// Initialize the router
const router = express();

// Get all
router.get('/api/placedorder_get_all/', async (req, res) => {
    const findOrder = await OrderSchema.find();
    res.json(findOrder);
});

// Get Single. The ID is a Param, as anything after /: is a parameter. Req is short for request, not require.
router.get('/api/placedorder_get_single/:id', async (req, res) => {
    const findOrder = await OrderSchema.findById(req.params.id)
    res.json(findOrder)
});

// Create
router.post('/api/placedorder_add/', async (req, res) => {
    const car = new OrderSchema({

        clientName: req.body.clientName,
        clientAddress: req.body.clientAddress,
        orderName: req.body.orderName

    });
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error)) // status 500 is an internal service error
});

//Delete
router.delete('/api/placedorder_delete/:id', async (req, res) => {
    await OrderSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;