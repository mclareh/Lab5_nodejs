var express = require("express");
var routes = express.Router();

routes.get("/tasks", function(req, res) {
	res.send("get working");
	console.log("get successful");
});

routes.post("/tasks", function(req, res) {
	res.send("post working");
	console.log("post successful");
});

routes.put("/tasks", function(req, res) {
	res.send("put working");
	console.log("put successful");
});

routes.delete("/tasks", function(req, res) {
	res.send("delete working");
	console.log("delete successful");
});


module.exports = routes;