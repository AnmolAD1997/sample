"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("Hello babies how you doing?");
});
app.listen(5000, function () {
    console.log("server is created at  port: 5000");
});
