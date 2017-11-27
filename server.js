var express = require("express");
var app = express();
var tasks = require("./tasks-routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", tasks);

var server = app.listen(8080, function() {
	console.log("server up");
});