const route = require("express").Router();
const Class = require("./class");
const { verifyToken } = require("../../imports/helper");

route.get("/", async (req, res) => {
    // TODO: if query search by query, else send everything
    try {
        const response = await new Class().find({});
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.post("/", async (req, res) => {
    try {
        const response = await new Class().create(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

module.exports = route;
