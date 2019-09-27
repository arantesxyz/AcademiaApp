const route = require("express").Router();
const Aluno = require("./aluno");
const { verifyToken } = require("../../imports/helper");

route.get("/", async (req, res) => {
    // TODO: if query search by query, else send everything
    try {
        const response = await new Aluno().find({});
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.post("/", async (req, res) => {
    try {
        const response = await new Aluno().create(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.put("/:id", verifyToken, async (req, res) => {
    try {
        const response = await new Aluno().update(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.get("/:id", verifyToken, async (req, res) => {
    try {
        const response = await new Aluno().findOne({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.delete("/:id", verifyToken, async (req, res) => {
    try {
        const response = await new Aluno().remove({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

module.exports = route;
