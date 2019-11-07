const CRUD = require("../../imports/crud");
const Students = require("./students.model");

module.exports = class Student extends CRUD {
    constructor() {
        super(Students);
    }

    async getStudentsInClass(classId) {
        try {
            return await this.find({ classes: classId }, "_id");
        } catch (err) {
            console.log("Student#getStudentsInClass", err);
        }
    }

    async create(req) {
        const student = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            birthday: req.body.birthday,
            instagram: req.body.instagram
        };

        // TODO: verify student

        return await this.insert(student);
    }
};
