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
    async getTodosByUserId(userId) {
        try {
            return await Todo.find({ user: userId });
        } catch (e) {
            throw e;
        }
    }
    async getTodoById(id) {
        try {
            return await Todo.findById(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = TodoRepository;
