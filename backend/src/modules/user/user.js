const CRUD = require("../../imports/crud");
const Users = require("./users.model");

module.exports = class User extends CRUD {
    constructor() {
        super(Users);
    }

    create(data) {
        return this.insert(data);
    }

    loginCheck(data) {
        const user = this.find(data, "_id");

        if (!user || !user._id)
            throw { status: 403, message: "Username or password wrong." };

        return user._id;
    }
};
