const CRUD = require("../../imports/crud");
const Alunos = require("./alunos.model");

module.exports = class Aluno extends CRUD {
    constructor() {
        super(Alunos);
    }

    create(data) {
        return this.insert(data);
    }
};
