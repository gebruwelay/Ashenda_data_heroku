var db = require("./db");
// our collection with different data types of attributes
var Product = db.model('ashenda_coll', {
    id: {type: Number, require: true},
    playerName: {type: String, require: true},
    eventName: {type: String, require: true},
    imgID: {type: String, require: true},
    polygon: [{lat:{ type:Number, require: true},
        lng: {type:Number, require: true}}],
    status: {type: Number, require: true},
    highScore: {type: Number, require: true},
    creationTime: {type: Date, require: true}
});

module.exports = Product;
