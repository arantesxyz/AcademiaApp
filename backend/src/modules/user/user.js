const CRUD = require("../../imports/crud");
const Users = require("./users.model");
const bcrypt = require("bcrypt");

module.exports = class User extends CRUD {
    constructor() {
        super(Users);
    }

    // if(bcrypt.compareSync('somePassword', hash)) {
    //     // Passwords match
    //    } else {
    //     // Passwords don't match
    //    }

    create(data) {
        data.password = bcrypt.hashSync(data.password, 10);
        return this.insert(data);
    }
};
