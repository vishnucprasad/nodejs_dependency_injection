"use strict";

module.exports = {
    databaseConnection: require("./connection"),
    AuthRepository: require("./repository/auth.repository"),
    TodoRepository: require("./repository/todo.repository"),
};
