//Method chaining
const routes = (app)=>{
//Creating the endpoints for home
app.get('/',(request,responds)=>{
    //Send respond to the broswer
    responds.send("<h1>Hello world hvhhj </h1>");
})

//Creating the endpoints for post
app.post('/',(request,responds)=>{
    //Send respond to the broswer
    responds.send("<h1>Post something </h1>");
})

//Creating the endpoints for put
app.put('/',(request,responds)=>{
    //Send respond to the broswer
    responds.send("<h1> `put something</h1>");
})

//Creating the endpoints for put
app.delete('/',(request,responds)=>{
    //Send respond to the broswer
    responds.send("<h1> `delete something</h1>");
})
}

