const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Mongo connection
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);

// Settings
app.use(express.json());

// Routes
const authRoute = require("./modules/auth/auth.routes");
app.use("/auth", authRoute);

const alunoRoute = require("./modules/aluno/aluno.routes");
app.use("/alunos", alunoRoute);

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
