const express = require('express')

const UserSchema = require('../models/users')

const router = express()

// Login User
router.post('/api/loginUser', async (req, res) => {

    const findUser = await UserSchema.findOne({
        email: req.body.email,
    })

    if (findUser != null) {

        if (findUser.password === req.body.password) {
            res.send("User Logged in");
        } else {
            res.send("Email and password does not match");
        }

    } else {
        res.send("User not found");
    }
    
})

// DELETE THE FOLLOWING, IT RETURNS SECURITY INFORMATION, THIS SI JUST FOR DEVELOPMENT PHASE;
// Read All
router.get('/api/getUsers', async (req, res) => {
    const findUser = await UserSchema.find();
    res.json(findUser)
});

// Create
router.post('/api/addUser/', async (req, res) => {
    const user = new UserSchema({ ...req.body });
    await user.save()
        .then(response => res.json(response) )
        .catch(error => res.status(500).json(error))
});

module.exports = router;