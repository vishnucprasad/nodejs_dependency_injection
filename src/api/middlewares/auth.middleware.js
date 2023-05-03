"use strict";

const { TokenExpiredError } = require("jsonwebtoken");
const {
    UnauthorizedError,
    InternalServerError,
} = require("../../utils/app.errors");

class AuthMiddleware {
    constructor(service) {
        this.service = service;
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }
    async isAuthenticated(req, res, next) {
        try {
            const tokenDetails = await this.service.verifyAccessToken(
                req.headers.authorization?.split(" ")[1]
            );

            req.decoded = tokenDetails;
            next();
        } catch (e) {
            if (e instanceof UnauthorizedError || TokenExpiredError) {
                return next(new UnauthorizedError());
            }

            next(new InternalServerError());
        }
    }
}

module.exports = AuthMiddleware;
