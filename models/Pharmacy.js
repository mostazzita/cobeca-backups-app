import { DataTypes, Deferrable } from "sequelize";
import sequelize from "../connection/connection.js";

const Pharmacy = sequelize.define('User', {
    pharmacy_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pharmacy_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pharmacy_phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pharmacy_email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Pharmacy