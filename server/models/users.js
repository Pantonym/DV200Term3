const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passComplex = require("joi-password-complexity");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this.id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const User = mongoose.model("user", UserSchema);

const validate = (data) => {
    const schema = joi.object({
        username: joi.string().required().label("Username"),
        email: joi.string().email().required().label("email"),
        password: passComplex().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = { User, validate };