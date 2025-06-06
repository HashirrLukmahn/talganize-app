const mysql = require('mysql2/promise');
const dotEnv = require('dotenv');
dotEnv.config({
    path: './config.env'
})

//Local: Create the connection to database
/*const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'talganize',
    connectionLimit: 10,
});*/



// //Server connection
// const db = mysql.createPool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
//     connectionLimit: 10,
// });

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    connectionLimit: 10,
    ssl: {
        rejectUnauthorized: false  // Required for GCP Cloud SQL
    },
    acquireTimeout: 60000,
    timeout: 60000
});

module.exports = db 