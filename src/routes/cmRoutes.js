//Method chaining
const routes = (app)=>{

    //Chaining all the routes to use app.route function
    app.route('/')
    .get( (request,respond)=>{
        respond.send("This is a get method")
    })

    .put( (request,respond)=>{
        respond.send("This is a put method")
    })

    .post( (request,respond)=>{
        respond.send("This is a post method")
    })

    .delete( (request,respond)=>{
        respond.send("This is a delete method")
    })
}


