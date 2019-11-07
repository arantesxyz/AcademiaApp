const route = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../user/user");

route.post("/register", (req, res) => {
    // TODO: validate newUser
    const newUser = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        hash: req.body.hash
    };

    try {
        const userId = new User().create(newUser);

        const token = jwt.sign({ userId }, process.env.JWT_SECRET);

        res.header("auth-token", token).json({ token });
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

route.get("/login", (req, res) => {
    if (!req.query)
        res.status(400).json({
            error: { message: "Data not valid", status: 400 }
        });

    // TODO: validate newUser

    try {
        const token = jwt.sign(
            {
                userId: new User().loginCheck({
                    email: req.query.email,
                    hash: req.query.hash
                })
            },
            process.env.JWT_SECRET
        );

        res.header("auth-token", token).json({ token });
    } catch (err) {
        res.status(err.status || 500).json(err);
    }
});

module.exports = route;
