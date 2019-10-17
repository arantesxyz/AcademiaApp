const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    phone: {
        type: String,
        required: true,
        max: 15,
        min: 9
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    address: {
        type: String,
        max: 255,
        min: 9
    },
    birthday: {
        type: Date
    },
    instagram: {
        type: String,
        max: 50,
        min: 3
    },
    classes: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("student", schema);
