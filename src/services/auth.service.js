"use strict";

const { generateAccessToken, generateRefreshToken } = require("../utils");

class AuthService {
    constructor(repository) {
        this.repository = repository;
    }
    async register(userDetails) {
        try {
            const user = await this.repository.createUser(userDetails);

            const payload = { _id: user._id };

            const accessToken = await generateAccessToken(payload);
            const refreshToken = await generateRefreshToken(payload);

            await this.repository.saveRefreshToken(user, refreshToken);

            return { accessToken, refreshToken, user };
        } catch (e) {
            throw e;
        }
    }
}

module.exports = AuthService;
