const express = require("express");
const trackerController = require("./trackerController");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use("/client", express.static("./mockup"));
server.use("/tracker", trackerController.router);

server.listen(8081);

console.log("http://localhost:8081");