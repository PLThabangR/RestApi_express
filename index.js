//Create a variable which require express
const express = require('express');
//import the routes 
const routes = require('./src/routes/cmRoutes')
//const path = require('path')
//Initialize a variable called app with express
const app = express();

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