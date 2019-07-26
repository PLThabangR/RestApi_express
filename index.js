//Create a variable which require express
const express = require('express');
//import the routes 
const routes = require('./src/routes/cmRoutes')
//Import the mongoose
const mongoose = require('mongoose')
//const path = require('path')
//Initialize a variable called app with express
const app = express();

//Use the created variable to connect to mongodb
mongoose.connect('mongodb://localhost/test',{
     useNewUrlParser: true 
});




//Create a model for the db
const Cat = mongoose.model('Cat',{name:String});

//An instance of the Cat
const kitty = new Cat({name:'kitty'});

//use kitty object to call a save method ...a promise is returned we use then to capture the response
kitty.save().then((response) =>{
    console.log(response)
}
)












//App.use is a middleware function 
// app.get('/',function(request,respond,next){
//     console.log('request method',request.method)
//     next();
// },function(request,respond,next){
//     console.log('Original url ',request.originalUrl)
//     next();
// },function(request,respond,next){
//     console.log('Request was successful ')
// })



//Setting up the port if the enviroment which on the server is not available check 5000
const PORT = process.env.PORT || 5000;

//The app should listen and we are passing a call back function which log the massege
app.listen(PORT,() => console.log(`Server started ${PORT}`));