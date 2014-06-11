var express = require("express");
var server = express();
var rootPath = __dirname;

server.get("/", function (req, res) {
    res.status(200).send("Hi");
});

console.log("Server is running on: 3000");
server.listen(3000);