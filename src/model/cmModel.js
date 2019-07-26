var mongoose =require('mongoose');

var schema = mongoose.schema;

//Creating a schema structure by passing a new object in schema

blogSchema = new schema({

    title:String,    //We are defining a key 
    author:String,      
    body:String
});

module.exports = blogSchema;