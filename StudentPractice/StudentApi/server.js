const express = require('express');
const app = express();

const port = 9000
const cors = require('cors')
const studentRouter = require("./Routers/studentRouter")

global.rootDir = __dirname;

const studentApp = express();

app.use(cors())

app.use(express.json({limit:'2mb', extended:false}));

app.use("/student", studentApp)
studentApp.use(studentRouter)

app.listen(port)


console.log("api launched at - localhost:"+port)