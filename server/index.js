//! Imports go at the top
const express = require('express')
const cors = require('cors')
const server = express()

const db = require('./util/database')
const {User, Product, Cart} = require('./util/models')

//! Middleware
server.use(express.json())
server.use(cors()) //* cross origin resource sharing allows you to send and recive data 


//! Associations for Tables/Models
User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)


//! endpoints






//! Listen/ creating a server
// {force: true} resets your tables 
db.sync()
.then(() => {
    server.listen(4000, () => console.log('server runs on 4000'))
})
.catch((err) => console.log(err))
