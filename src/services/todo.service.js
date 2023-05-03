"use strict";

class TodoService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(userId, todoDetails) {
        try {
            return await this.repository.createTodo({
                user: userId,
                ...todoDetails,
            });
        } catch (e) {
            throw e;
        }
    }
    async getTodos(userId) {
        try {
            return await this.repository.getTodosByUserId(userId);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = TodoService;
