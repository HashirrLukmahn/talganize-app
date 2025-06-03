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
const jobSeekerRouter = require("./src/routes/jobSeekerRouter")
const employerRouter = require('./src/routes/employerRouter')


// Importing the ENV file constants
// dotEnv.config({
//     path: "config.env"
// })



// Choosing the ports from env ( default 8080)
const PORT = process.env.PORT || 8080

const allowedOrigins = [
    "http://localhost:3000",
    "https://frontend-dot-talganize-dev.uc.r.appspot.com",
    "http://localhost:8080/api/auth/google"
];



app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)

        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));
app.options("*", cors());

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '900mb'
}));
app.use(cookieParser());
// app.use(upload())



app.use(userRouter)
app.use(jobSeekerRouter)
app.use('/api/employer', employerRouter)












server.listen(PORT, async (err) => {
    if (err) {
        return console.log("Error :", err)
    } else {
        console.log('Running on port', PORT)
        // connectDB()
        // await sequelize.sync();
    }
})