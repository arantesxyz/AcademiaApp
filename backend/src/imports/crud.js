module.exports = class CRUD {
    constructor(model) {
        this.model = model;
    }

    async insert(data) {
        return await new this.model(data).save();
    }

    async find(query = {}, fields, options = {}) {
        return await this.model.find(query, fields, options);
    }

    async findOne(query = {}, fields, options = {}) {
        return await this.model.findOne(query, fields, options);
    }

    async remove(query = {}, options = {}) {
        return await this.model.findOneAndDelete(query, options);
    }

    async update(query, options = {}, data = {}) {
        return await this.model.findOneAndUpdate(query, data, options);
    }
};
