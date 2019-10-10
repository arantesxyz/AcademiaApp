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

const alunoRoute = require("./modules/aluno/aluno.routes");
app.use("/alunos", alunoRoute);

const turmaRoute = require("./modules/turma/turma.routes");
app.use("/turmas", turmaRoute);

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
