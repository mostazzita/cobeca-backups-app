import { Sequelize } from "sequelize"
import User from "../models/User.js"

const getUser = async () => {
    const users = await User.findAll()
    console.log('All users:', JSON.stringify(users, null, 2));
}

getUser()