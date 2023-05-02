"use strict";

const AuthController = require("../controllers/auth.controller");
const AuthService = require("../services/auth.service");
const { AuthRepository } = require("../database");

function auth(app) {
    const authRepository = new AuthRepository();
    const authService = new AuthService(authRepository);
    const authController = new AuthController(authService);

    app.post("/auth/register", authController.register);
}

module.exports = auth;
