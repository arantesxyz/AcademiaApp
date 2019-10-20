const route = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../user/user");

route.get("/login", (req, res) => {
    if (!req.query)
        res.status(400).json({
            error: { message: "Data not valid", code: 400 }
        });

    // TODO: validate req.query and create variables
    try {
        const userId = new User().create({
            name,
            username,
            email,
            password
        });

        // login sucess
        const token = jwt.sign({ userId }, process.env.JWT_SECRET);

        res.header("auth-token", token).json({ token });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = route;
