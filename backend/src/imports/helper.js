const jwt = require("jsonwebtoken");
const User = require("../modules/user/user");

module.exports = class Helper {
    static userRoles = {
        PROFESSOR: 1,
        SECRETARIO: 2,
        ADMINISTRADOR: 3,
        SUPER: 4
    };

    static verifyToken(req, res, next) {
        const token = req.header("auth-token");
        if (!token)
            res.status(403).json({
                error: {
                    message: "Invalid token. Access denied!",
                    code: 403
                }
            });

        try {
            const _id = jwt.verify(token, process.env.JWT_SECRET);
            req.user = new User().find({ _id });

            if (!req.user) throw { err: "User does not exist" };
            next();
        } catch (err) {
            res.status(403).json({
                error: {
                    message: "Invalid token. Access denied!",
                    code: 403
                }
            });
        }
    }
};
