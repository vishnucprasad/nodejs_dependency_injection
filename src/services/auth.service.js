"use strict";

const { generateAccessToken, generateRefreshToken } = require("../utils");
const { NotFoundError, UnauthorizedError } = require("../utils/app.errors");

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
    async login(email, password) {
        try {
            const user = await this.repository.findUserByEmail(email);

            if (!user) {
                throw new NotFoundError("User not found");
            }

            if (!(await user.isValidPassword(password))) {
                throw new UnauthorizedError("Invalid password");
            }

            const payload = { _id: user._id };

            const accessToken = await generateAccessToken(payload);
            const refreshToken = await generateRefreshToken(payload);

            const savedRefreshToken =
                await this.repository.findRefreshTokenByUserId(user._id);

            if (savedRefreshToken) {
                await savedRefreshToken.remove();
            }

            await this.repository.saveRefreshToken(user, refreshToken);

            return { accessToken, refreshToken, user };
        } catch (e) {
            throw e;
        }
    }
}

module.exports = AuthService;
