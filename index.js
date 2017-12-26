// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "7-student-do-signin-cookies-solution.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});