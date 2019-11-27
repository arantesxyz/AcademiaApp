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

route.put("/:id", async (req, res) => {
    let data = req.body;
    delete data._id;

    try {
        const response = await new Student().update(
            { _id: req.params.id },
            {},
            data
        );
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.get("/:id", async (req, res) => {
    try {
        const response = await new Student().findOne({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.delete("/:id", async (req, res) => {
    try {
        const response = await new Student().remove({ _id: req.params.id });
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

module.exports = route;
