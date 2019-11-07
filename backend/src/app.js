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

const studentRoute = require("./modules/student/student.routes");
app.use("/students", studentRoute);

const classRoute = require("./modules/class/class.routes");
app.use("/classes", classRoute);

const paymentRoute = require("./modules/payment/payment.routes");
app.use("/payment", paymentRoute);

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
