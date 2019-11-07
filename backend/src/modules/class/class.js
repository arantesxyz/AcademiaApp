const CRUD = require("../../imports/crud");
const Classes = require("./classes.model");
const Student = require("../student/student");

module.exports = class Class extends CRUD {
    constructor() {
        super(Classes);
    }

    async find() {
        let response = [];

        try {
            response = await super.find();
        } catch (err) {
            console.log("Class#find", err);
        }

        // TODO: test case
        return await Promise.all(
            response.map(async (item) => {
                item.students = await new Student().getStudentsInClass(
                    item._id
                );
                return item;
            })
        );
    }

    async create(req) {
        const newClass = {
            name: req.body.name,
            description: req.body.description,
            modality: req.body.modality,
            times: req.body.times,
            maxNumOfStudents: req.body.maxNumOfStudents
        };

        // TODO: verify newClass
        try {
            return await this.insert(newClass);
        } catch (error) {
            console.log("Class#create", error);
        }
    }
};
