//Create a variable which require express
const express = require('express');
//const path = require('path')
//Initialize a variable called app with express
const app = express();

//Creating the endpoints for home
app.get('/',(request,responds)=>{
    //Send respond to the broswer
    responds.send("<h1>Hello world </h1>");
})

//App.use is a middleware function set a static folder
//app.use(express.static(path.join(__dirname,'public')))



//Setting up the port if the enviroment which on the server is not available check 5000
const PORT = process.env.PORT || 5000;

//The app should listen and we are passing a call back function which log the massege
app.listen(PORT,() => console.log(`Server started ${PORT}`));