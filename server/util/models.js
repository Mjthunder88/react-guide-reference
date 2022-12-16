const { DataTypes } = require('sequelize')

const db = require('./database')

module.exports = {
    User: db.define("user", {                   //! SEQUELIZE WILL MAKE YOUR TABLE PLUR so make sure you make is singular (user NOT users) AFTER sequalize (user = users AND users = userss)
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING({length: 20}),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }),
    Product: db.define("product", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        clearance: DataTypes.BOOLEAN
    }),
    Cart: db.define("cart", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        }
    })
}