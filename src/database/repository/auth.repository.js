"use strict";

const RefreshToken = require("../models/refreshtoken.model");
const User = require("../models/user.model");

class AuthRepository {
    async createUser(user) {
        try {
            return await new User(user).save();
        } catch (e) {
            throw e;
        }
    }
    async saveRefreshToken(user, refreshToken) {
        try {
            return await new RefreshToken({
                user: user._id,
                token: refreshToken,
            }).save();
        } catch (e) {
            throw e;
        }
    }
}

module.exports = AuthRepository;
