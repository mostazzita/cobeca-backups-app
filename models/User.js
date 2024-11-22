import { DataTypes, Deferrable } from "sequelize";
import sequelize from "../connection/connection.js";

const User = sequelize.define('User', {
    user_firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default User