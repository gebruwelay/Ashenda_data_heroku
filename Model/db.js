var mongoose = require("mongoose");
// Database connection to Geotodo
//mongoose.connect("mongodb://localhost/Ashenda");
var uri = 'mongodb://Gebru:hope4all@ds161584.mlab.com:61584/ashenda';
mongoose.connect(uri);
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error."));
db.on("open", function () {
    console.log("Mongodb connected");
});

module.exports = mongoose;

