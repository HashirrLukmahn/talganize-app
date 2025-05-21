const mysql = require('mysql2/promise');
const dotEnv = require('dotenv');
dotEnv.config({
    path: './config.env'
})

//Local: Create the connection to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'talganize',
    connectionLimit: 10,
});



// //Server connection
// const db = mysql.createPool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
//     connectionLimit: 10,
// });

module.exports = db 