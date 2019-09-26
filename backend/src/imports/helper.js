const jwt = require("jsonwebtoken");

module.exports = class Helper {
    static verifyToken(req, res, next) {
        const token = req.header("auth-token");
        if (!token)
            res.status(400).json({
                error: {
                    message: "Invalid token. Acess denied!",
                    code: 400
                }
            });

        try {
            req.userId = jwt.verify(token, process.env.JWT_SECRET);
            next();
        } catch (err) {
            res.status(400).json({
                error: {
                    message: "Invalid token. Acess denied!",
                    code: 400
                }
            });
        }
    }
};
