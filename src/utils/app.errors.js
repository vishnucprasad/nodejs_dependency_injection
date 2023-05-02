"use strict";

const STATUS_CODES = {
    OK: 200,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

class AppError extends Error {
    constructor(description, name, statusCode, isOperational, errorStack) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.description = description;
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.errorStack = errorStack;
        Error.captureStackTrace(this);
    }
}

class NotFoundError extends AppError {
    constructor(
        description,
        name = "Not found",
        statusCode = STATUS_CODES.NOT_FOUND,
        isOperational = true
    ) {
        super(description, name, statusCode, isOperational);
    }
}

module.exports = {
    AppError,
    NotFoundError,
    STATUS_CODES,
};
