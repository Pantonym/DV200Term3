const express = require('express')

const CarSchema = require('../models/cars')

const router = express();

//Read all
router.get('/api/cars', async(req, res) =>{
    const findCar = await CarSchema.find()
    res.json(findCar)
})

//Read Single
// we're up here now, WHOOOOOOO
// where shall our adventure gp next
// 'ill give you a quick second' already too late for that dude
// nobody is even CLOSE to where you are now
// doubt if anyone even knows what insomnia is for, much less how to use it
// IF ONLY we had some form of teacher, perhaps a lecturer, who could have told us
// We've already complained about this before, glad to see he saw it and just went "lmao let's go faster next time"
router.get('/api/car/:id', async (req, res) => {
    const findCar = await CarSchema.findByID(req.params.id)
    res.json(findCar)
})

//Create
router.post('/api/car', async (req, res) =>{
    const car = new CarSchema({ ...req.body })
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

// something, idk i am so lost and he just does not care about is
// apparently its update lmao
// hes in insomnia now
// too bad he doesnt care enough to just wait two seconds so we can know whats going on
// didnt even explain what insomnia is lmao
// look at that, another "app crashed" error
// too bad he just said "deal with it" and moved on without explaining ANYTHING
// so not only are we completely lost, we cant even test whatever it is we're doing because he just ignored our requests for help, even though we havent done this at all before
router.put('/api/car/:id', async (req, res) =>{
    const {id} = req.params.id;
    await CarSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
// might as well not even be here if hes going to be like this
// if it wasnt for attendance i'd just leave, cause whats the point
// he complains when we ask him to slow down or repeat something, BUT WE WOULDNT HAVE TO DO THAT IF HE JUST TOK HIS TIME
// contrary to popular belief, we are not experienced developers with multiple decades under our belt
router.delete('/api/car/:id', async (req, res) =>{
    await CarSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;