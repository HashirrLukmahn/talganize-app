// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../config/sequalize');

// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     first_name: {
//         type: DataTypes.STRING(50),
//         allowNull: true,
//         defaultValue: null,
//     },
//     middle_name: {
//         type: DataTypes.STRING(50),
//         allowNull: true,
//         defaultValue: null,
//     },
//     last_name: {
//         type: DataTypes.STRING(50),
//         allowNull: true,
//         defaultValue: null,
//     },
//     user_type_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING(50),
//         allowNull: true,
//         unique: true, // ✅ Make email unique
//         validate: {
//             isEmail: true,
//         },
//     },
//     password: {
//         type: DataTypes.STRING(100),
//         allowNull: true,
//     },
//     phone: {
//         type: DataTypes.TEXT,
//         allowNull: true,
//         defaultValue: null,
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW,
//     },
//     updated_at: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
// }, {
//     timestamps: false,  // Since we have custom timestamps
//     tableName: 'users',  // Explicit table name
// });

// module.exports = User;
