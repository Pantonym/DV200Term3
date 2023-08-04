// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const CarSchema = require('../models/cars.js');

// Initialize the router
const router = express();

// Get all
router.get('/api/cars/', async (req, res) => {
    const findCar = await CarSchema.find();
    res.json(findCar);
});

// Get Single. The ID is a Param, as anything after /: is a parameter. Req is short for request, not require.
router.get('/api/car/:id', async (req, res) => {
    const findCar = await CarSchema.findById(req.params.id)
    res.json(findCar)
});

// Update. You can use .put or .patch
router.put('/api/car/:id', async (req, res) => {
    const { id } = req.params.id;
    await CarSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// Create
router.post('/api/car', async (req, res) => {
    const car = new CarSchema({ ...req.body });
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error)) // status 500 is an internal service error
});

//Delete
router.delete('/api/car/:id', async (req, res) => {
    await CarSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;