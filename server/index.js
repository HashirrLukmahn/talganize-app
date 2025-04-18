const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const dotEnv = require('dotenv').config()
const db = require('./src/config/db')
const cors = require('cors')
var bodyParser = require('body-parser');
// const { connectDB, sequelize } = require('./src/config/db');
const cookieParser = require("cookie-parser");

const userRouter = require("./src/routes/userRouter")



// Importing the ENV file constants
// dotEnv.config({
//     path: "config.env"
// })



// Choosing the ports from env ( default 8080)
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '900mb'
}));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json())
// app.use(upload())
app.use(userRouter)
app.use(cookieParser());













server.listen(PORT, async (err) => {
    if (err) {
        return console.log("Error :", err)
    } else {
        console.log('Running on port', PORT)
        // connectDB()
        // await sequelize.sync();
    }
})