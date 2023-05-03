"use strict";

const Todo = require("../models/todo.model");

class TodoRepository {
    async createTodo(todo) {
        try {
            return await Todo(todo).save();
        } catch (e) {
            throw e;
        }
    }
}

module.exports = TodoRepository;
