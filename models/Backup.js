import { DataTypes, Deferrable } from "sequelize";
import sequelize from "../connection/connection.js";

const Backup = sequelize.define('Backup', {
    backup_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    backup_lastUpdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    
})

export default Backup