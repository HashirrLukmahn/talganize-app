// module.exports = (sequelize, DataTypes) => {
//     const UserType = sequelize.define("UserType", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         type_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     },
//         {
//             tableName: "user_types", //  Explicit table name
//             timestamps: false,       //  if your table doesn't have createdAt/updatedAt
//         });

//     UserType.associate = (models) => {
//         UserType.hasMany(models.User, {
//             foreignKey: "user_type_id",
//         });
//     };

//     return UserType;
// };
