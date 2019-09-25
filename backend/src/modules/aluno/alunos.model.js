const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    middle_name: {
        type: String,
        max: 255,
        min: 6
    },
    last_name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    birthday: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("alunos", schema);
