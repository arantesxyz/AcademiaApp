const CRUD = require("../../imports/crud");
const Payments = require("./payments.model");

module.exports = class Payment extends CRUD {
    constructor() {
        super(Payments);
    }

    async getPayments(req) {
        const ALLOWED_KEYS = ["debit", "credit", "type", "month"];
        const query = {};

        Object.keys(req.query).forEach((key) => {
            if (ALLOWED_KEYS.includes(key)) {
                query[key] = req.query[key];
            }
        });

        // TODO: block empty queries

        return await this.find(query);
    }
    async create(req) {
        const newPayment = {
            studentId: req.body.studentId,
            paymentDate: req.body.date,
            value: req.body.value,
            parcels: req.body.parcels
        };

        // TODO: verify newPayment
        try {
            return await this.insert(newPayment);
        } catch (error) {
            console.log("Payment#create", error);
        }
    }
};
