const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    method: {
        type: String
    },
    parcels: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("payment", schema);
