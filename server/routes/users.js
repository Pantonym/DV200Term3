const express = require('express')
const router = express()
const UserSchema = require('../models/users')
const bcrypt = require("bcrypt");

router.post("/auth", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // ... means from the page we are in, invoke this
        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

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
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// login
// router.post('/api/login', async

module.exports = router;