const route = require("express").Router();
const Aluno = require("./aluno");
const { verifyToken } = require("../../imports/helper");

route.get("/", verifyToken, (req, res) => {
    // if query search by query, else send everything
});

route.post("/", verifyToken, (req, res) => {
    try {
        const response = new Aluno().create(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.put("/:id", verifyToken, (req, res) => {
    try {
        const response = new Aluno().update(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.get("/:id", verifyToken, (req, res) => {
    try {
        const response = new Aluno().findOne({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.delete("/:id", verifyToken, (req, res) => {
    try {
        const response = new Aluno().remove({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});
