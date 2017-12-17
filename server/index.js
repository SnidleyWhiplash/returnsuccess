const express = require("express");
const trackerController = require("./trackerController");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded());
server.use("/client", express.static("./mockup"));
server.use("/tracker", trackerController.router);

server.listen(8081);

console.log("http://localhost:8081");