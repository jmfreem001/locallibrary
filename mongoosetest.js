//IMport the mongoose module
var mongoose = require('mongoose');

//set up Mongo client
var MongoClient = require('mongodb').MongoClient;
var url = "mongomongodb://localhost:27017/mydb"

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoDB, { useNewUrlParse: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event ( to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Define a schema 
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string:String,
    a_date: Date
})

//compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

var schema = new Schema(
    {
        name: String,
        binary: Buffer,
        living: Boolean,
        updated { type: Date, default: Date.now()},
        age: { type: Number, min:18, max: 65, required:true},
        mixed: Schema.Types.ObjectId,
        array: [],
        ofString: [String],
        nested: { stuff: {type: String, lowercase: true, trim:true } }
    })