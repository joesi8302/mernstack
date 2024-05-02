const express = require("express")
const app = express()
const port = 4000
const studentRouter = require("./routers/StudentRouter")

app.use('/', studentRouter)


// app.get('/', function (req, res) {
//   res.send('Hello World!!!!!')
// })

app.listen(port)