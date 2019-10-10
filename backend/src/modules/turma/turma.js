const CRUD = require("../../imports/crud");
const Turmas = require("./turmas.model");

module.exports = class Turma extends CRUD {
    constructor() {
        super(Turmas);
    }

    async create(req) {
        const turma = {
            name: req.body.name,
            description: req.body.description,
            modality: req.body.modality,
            times: req.body.times,
            maxNumOfStudents: req.body.maxNumOfStudents
        };

        // TODO: verify turma

        return await this.insert(turma);
    }
};
