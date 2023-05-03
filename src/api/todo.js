"use strict";

const AuthMiddleware = require("./middlewares/auth.middleware");
const AuthService = require("../services/auth.service");
const AuthRepository = require("../database/repository/auth.repository");
const TodoController = require("./controllers/todo.controller");
const TodoService = require("../services/todo.service");
const { TodoRepository } = require("../database");

function todo(app) {
    const authRepository = new AuthRepository();
    const authService = new AuthService(authRepository);
    const authMiddleware = new AuthMiddleware(authService);
    const todoRepository = new TodoRepository();
    const todoService = new TodoService(todoRepository);
    const todoController = new TodoController(todoService);

    app.get("/todo", authMiddleware.isAuthenticated, todoController.getTodos);
    app.post("/todo", authMiddleware.isAuthenticated, todoController.create);
}

module.exports = todo;
