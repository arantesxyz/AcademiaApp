const CRUD = require("../../imports/crud");
const Users = require("./users.model");

module.exports = class User extends CRUD {
    constructor() {
        super(Users);
    }

    // if(bcrypt.compareSync('somePassword', hash)) {
    //     // Passwords match
    //    } else {match
    //     // Passwords don't
    //    }

    create(data) {
        return this.insert(data);
    }
};
