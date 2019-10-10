const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    description: {
        type: String
    },
    modality: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    times: {
        type: Array
    },
    maxNumOfStudents: {
        type: Number
    },
    numOfStudents: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("turma", schema);
