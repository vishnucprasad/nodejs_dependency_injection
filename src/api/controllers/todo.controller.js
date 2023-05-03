"use strict";

const { InternalServerError, STATUS_CODES } = require("../../utils/app.errors");

class TodoController {
    constructor(service) {
        this.service = service;
        this.create = this.create.bind(this);
    }
    async create(req, res, next) {
        try {
            const { _id } = req.decoded;

            const todo = await this.service.create(_id, req.body);

            res.status(STATUS_CODES.OK).json({
                todo,
            });
        } catch (e) {
            next(new InternalServerError(e.message));
        }
    }
}

module.exports = TodoController;
