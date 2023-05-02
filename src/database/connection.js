"use strict";

const mongoose = require("mongoose");
const logger = require("../config/logger.config");
const { MONGO_URI, options } = require("../config/database.config");

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

function connect() {
    // Connecting to mongoose
    mongoose.connect(MONGO_URI, options);

    // Listen for mongoose connected event
    mongoose.connection.on("connected", function () {
        logger.info(`mongoose connected to ${MONGO_URI}`);
    });

    // Listen for mongoose connection error event
    mongoose.connection.on("error", function (err) {
        logger.error(`mongoose connection error: ${err}`);
    });

    // Listen for mongoose disconnected event
    mongoose.connection.on("disconnected", function () {
        logger.info("mongoose disconnected");
    });
}

function close() {
    // Closing mongoose connection
    mongoose.connection.close(function () {
        logger.info("mongoose disconnected through app termination");
        process.exit(0);
    });
}

module.exports = {
    connect,
    close,
};
