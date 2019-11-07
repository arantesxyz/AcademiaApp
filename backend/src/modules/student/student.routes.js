const route = require("express").Router();
const Student = require("./student");
const { verifyToken } = require("../../imports/helper");

route.get("/", async (req, res) => {
    // TODO: if query search by query, else send everything
    try {
        const response = await new Student().find({});
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.post("/", async (req, res) => {
    try {
        const response = await new Student().create(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.put("/:id", verifyToken, async (req, res) => {
    try {
        const response = await new Student().update(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.get("/:id", verifyToken, async (req, res) => {
    try {
        const response = await new Student().findOne({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.delete("/:id", verifyToken, async (req, res) => {
    try {
        const response = await new Student().remove({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

module.exports = route;
