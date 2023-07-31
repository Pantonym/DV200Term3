const express = require('express')
const UserSchema = require('../models/users')
const router = express()

//Add a User
router.post('/api/addUser/', async (req, res) =>{
    const user = new UserSchema({ ...req.body })
    await user.save()
        .then(response => res.json(response) )
        .catch(error => res.status(500).json(error))
})

// DELETE THE FOLLOWING, IT RETURNS SECURITY INFORMATION, THIS SI JUST FOR DEVELOPMENT PHASE;
//Get all
router.get('/api/getUsers/', async (req, res) =>{
    const findUser = await UserSchema.find()
    res.json(findUser)
})

// Login User
router.post('/api/loginUser', async (req, res) => {
    const findUser = await UserSchema.findOne({
        email: req.body.email,
    })
    console.log(findUser);
    if (findUser != null) {
        if (findUser.password === req.body.password) {
            res.send("User Logged in")
        } else {
            res.json("Email and password does not match")
        }
    } else {
        res.send("User not found")
    }
})
// so many insomnia additions he made, yet we have no idea what any of it means, nor how to do it ourselves
// i dont even know what the code above does lol
// its just words, he didnt explain a single bit of it
// "wE GoT fAsTer ThrOugH tHaT tHAn i ThOUgHT w EwOuLD" WE FINISHED AN HOUR EARLIER, JUST LIKE WE DO EVERY 
// SINGLE
// TIME
// YOU COULD HAVE TAUGHT US SO MUCH HAD YOU ONLY CARED ENOUGH TO DO THE BARE MINIMUM
// WE HAVE NO IDEA WHATS GOING ON BECAUSE YOU SPED THROUGH SO FAST
// AND WE FINISHED AN HOUR EARLY
// THIS IS EXACTLY WHAT WE COMPLAINED ABOUT LAST TIME
// I AM SO TEMPTED TO SWITCH COLLEGES, THIS IS RIDICULOUS

module.exports = router;
// genuinely making me feel like i should have studied at a different college
// ooh now hes typing in silence
// its like this is just a solo project for him, like he doesn't care about teaching us anything

// we're back here now
// trying to fix the error on my onwaiting, but idk why it crashes
// almost like ive never done this before
// what's the point of just sitting, waiting for him to type only to copy and paste it
// were not learning ANYTHING other than how to use ctrl+c, ctrl+v
// even when my opera crashed, he couldn't care enough to catch me up with literally 30 seconds of work
