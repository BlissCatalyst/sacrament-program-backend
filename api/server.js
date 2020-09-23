const express = require("express");

const configuredMiddleware = require("./configuredMiddleware.js");

const server = express();

configuredMiddleware(server);

server.get("/", (req, res) => {
    res.send("Server is Running!");
});

module.exports = server;
