const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const carRoute = require('./routes/cars')
const userRoute = require('./routes/users')

require('dotenv/config');

const app = express()

// used with react
app.use(cors({
    origin: 'http://localhost:3000' //change if the port changes to 3001, etc
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(carRoute)
app.use(userRoute)

//goes to env file and pulls correct details from it, and connects to the mongo instance
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test', //Collection Name
}).then(() => console.log("Connected to test DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5001;
// if the port doesn't work, delete all terminals on the lower right had side

app.listen(PORT, () => { console.log(`server has started at port: ${PORT}`) });

// just checked, nobody knows what Insomnia is, nor how to use it
// i should have gone to a different college
// it just makes you feel so dejected
// cause its obvious he doesnt care AT ALL about teaching
// if he did, he would ACTUALLY DO IT WITH US INSTEAD OF DOING IT SOLO
// what's the use of complaining to student support if nothing ever changes