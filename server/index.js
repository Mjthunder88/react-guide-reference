//! Imports go at the top
const express = require('express')
const cors = require('cors')
const server = express()

const seed = require('./util/seed')

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

server.post('/api/addUser', async (req, res) => {
    const {username, password} = req.body
    try {
        await User.create({
             name: username,
             password
        })
        res.status(200).send('User created')
    } catch (error) {
        console.log(error)
        res.status(401).send('Could not create user')
    }
})

server.get('/api/user/:id', async (req, res) => {
   try {
       const {id} = req.params
        let info = await User.findOne({where: {id: id}})
        res.status(200).send(info)
   } catch {
    res.status(401).send('Couldnt complete request')
   }
})




//! Listen/ creating a server
// {force: true} resets your tables 
db
.sync()
// .sync({force: true})
.then(() => {
    // seed()
})
.catch((err) => console.log(err))

server.listen(4000, () => console.log('server runs on 4000'))