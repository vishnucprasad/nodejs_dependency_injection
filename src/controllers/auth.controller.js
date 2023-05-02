"use strict";

const {
    InternalServerError,
    STATUS_CODES,
    ConflictError,
} = require("../utils/app.errors");

class AuthController {
    constructor(service) {
        this.service = service;
        this.register = this.register.bind(this);
    }
    async register(req, res, next) {
        try {
            const { accessToken, refreshToken, user } =
                await this.service.register(req.body);

            res.status(STATUS_CODES.OK).json({
                accessToken,
                refreshToken,
                user,
            });
        } catch (e) {
            if (e.code === 11000) {
                return next(
                    new ConflictError("This email is aleady registered")
                );
            }

            next(new InternalServerError(e.message));
        }
    }
}

module.exports = AuthController;