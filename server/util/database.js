require('dotenv').config()
const Sequelize = require('sequelize')

const {DATABASE_URL} = process.env

                                            //* this can just be named db it doesn't have to be 'sequelize'
const db = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}) 
// ? ------^BolierPlate code ^------------------



module.exports = db
