// imporitng express top class and thenc reating express erver

const express = require("express")
const app = express() // invoking the class to create express app server

//we can have onemain dn multiple other epxress apps at one place
const adminApp = express(); // a new express app to handle request mounted with admin in path

const port = 9000; // 
const defaultRouter = require("./Routers/defaultRouter")

app.use("/",defaultRouter)


app.get('/', function (req, res){
    res.send("hello world")
})

app.get('/data', function (req, res){
    let queryString = req.query  // req.query - is used to read the values present after ? in api path

    console.log(queryString)
    console.log(req)


    if(queryString.session == "express"){
        res.json({"name ": queryString.name})
    }else{
        res.json(queryString)
    }   
})

app.get('/nameByID/:id', function (req, res){
    let queryParam = req.query["id"] // reads the parameter passed in path of API, we can have multiple query params

    console.log(JSON.stringify(queryParam))
    console.log(req)

    if(queryParam== 2000){
        res.send("<h1>User is present</h1>")
    }else{
        res.send("<h1>User is NOT present</h1>")
    }   
})

app.post('/adduser', function (req, res){
    let data = req.body  // {} this will contain the information apss as req.body as a JSON object

    req.json(data)

})



/////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/getalert', function (req, res){
    
    res.sendFile(__dirname+"/Public/index.html")
    
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// a hack to handle static files but a feasible approach
// app.get('/alert_me.js', function (req, res){
    
//     res.sendFile(__dirname+"/Public/index.html")
    
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////
// setting up thje middleware static to handle all the static files we need to server to the client
// server static fioles li,e images css using static middleware
app.use('/static',express.static('public'))
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//this is a wild card to accept all calls
// would be a fallbakc for every API that is not available
// app.all('*', function(req, res){
//     res.sendFile(__dirname+"/Public/index.html")
// })


// path mounting to other express APP
app.use('/admin', adminApp)

//http://localhost:3000/admin
adminApp.get("/",(req, res) =>{
    res.send("Hello from Admin APP")
})

//http://localhost:3000/admin/info
adminApp.get("/info",(req, res) =>{
    res.send("No Information")
})











/////////////////////////////////////////////////////////////////////////////////////////////////////////


app.listen(port)

console.log("api launched at - localhost:" + port)

// every change, we would have to stop the server and start again
    // HOWEVER, there is a dev Dependency that allows us to fix this problem
    // called nodemon: npm i nodemon -D
    // we need to change the script in the packag.json to start nodemon server.js
    // to start we do 'npm start'

// http://localhost:3000/data? name=Joe%session=express
// Payload:
    // The query parameters: name=Joe%session=express


// Status Codes:
// 1xx Status Codes [Informational]
// 2xx Status Codes [Success]
// 3xx Status Codes [Redirection]
// 4xx Status Codes (Client Error)
// 5xx Status Codes (Server Error)