const route = require("express").Router();
const Payment = require("./payment");
const { verifyToken } = require("../../imports/helper");

route.get("/", async (req, res) => {
    try {
        const response = await new Payment().getPayments(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.post("/", async (req, res) => {
    try {
        const response = await new Payment().create(req);
        res.status(response.status || 200).json(response);
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

module.exports = route;
