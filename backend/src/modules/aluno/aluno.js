const CRUD = require("../../imports/crud");
const Alunos = require("./alunos.model");

module.exports = class Aluno extends CRUD {
    constructor() {
        super(Alunos);
    }

    async create(req) {
        const aluno = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            birthday: req.body.birthday,
            instagram: req.body.instagram
        };

        // TODO: verify aluno

        return await this.insert(aluno);
    }
};
