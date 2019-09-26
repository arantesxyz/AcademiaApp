module.exports = class CRUD {
    constructor(model) {
        this.model = model;
    }

    insert(data) {
        return new this.model(data).save();
    }

    find(query = {}, fields = "", options = {}) {
        let toReturn = [];

        this.model.find(query, fields, options, (err, docs) => {
            if (err) throw new Error(err);

            toReturn = docs;
        });

        return toReturn;
    }

    findOne(query = {}, fields = "", options = {}) {
        let toReturn = {};

        this.model.findOne(query, fields, options, (err, doc) => {
            if (err) throw new Error(err);

            toReturn = doc;
        });

        return toReturn;
    }

    remove() {
        let toReturn;

        this.model.findOneAndDelete(query, options, (err, doc) => {
            if (err) throw new Error(err);

            toReturn = doc;
        });

        return toReturn;
    }
};
