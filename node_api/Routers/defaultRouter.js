// express router- class to crete the route table
// defin the API verbs
// define the api vers restrictions
// doesn't need express app invocation
// we can work the same way we did with the express app

let express = require("express")

let defaultRouter = express.Router({});

module.exports = defaultRouter

defaultRouter.get('/', function (req, res) {
    res.send('Hello World!!!!!')
  })

defaultRouter.get('/data', function (req, res){
    let queryString = req.query  // req.query - is used to read the values present after ? in api path

    console.log(queryString)
    console.log(req)


    if(queryString.session == "express"){
        res.json({"name ": queryString.name})
    }else{
        res.json(queryString)
    }   
})

defaultRouter.get('/nameByID/:id', function (req, res){
    let queryParam = req.query["id"] // reads the parameter passed in path of API, we can have multiple query params

    console.log(JSON.stringify(queryParam))
    console.log(req)

    if(queryParam== 2000){
        res.send("<h1>User is present</h1>")
    }else{
        res.send("<h1>User is NOT present</h1>")
    }   
})

defaultRouter.post('/adduser', function (req, res){
    let data = req.body  // {} this will contain the information apss as req.body as a JSON object

    req.json(data)

})

