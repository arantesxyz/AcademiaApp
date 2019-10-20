const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Mongo connection

try {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    });
    console.log("Connected to DB");
} catch (err) {
    console.log(err);
}

// Settings
app.use(cors());
app.use(express.json());

// Routes
const authRoute = require("./modules/auth/auth.routes");
app.use("/auth", authRoute);

const classRoute = require("./modules/student/student.routes");
app.use("/alunos", classRoute);

const classRoute = require("./modules/class/class.routes");
app.use("/turmas", classRoute);

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
