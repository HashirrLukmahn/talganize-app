// const { Sequelize } = require('sequelize');
// const dotEnv = require('dotenv')
// dotEnv.config({
//     path: "config.env"
// })

// //Locast database
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     logging: false
// });


// // const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
// //     host: process.env.DB_HOST,
// //     dialect: 'mysql',
// //     logging: false
// // });

// const connectDB = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('✅ MySQL Database Connected Successfully.');
//     } catch (error) {
//         console.error('❌ Unable to connect to the database:', error);
//     }
// };


// module.exports = { sequelize, connectDB };