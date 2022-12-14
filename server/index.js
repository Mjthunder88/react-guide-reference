//! Imports go at the top
const express = require('express')
const cors = require('cors')
const server = express()

//! Middleware
server.use(express.json())
server.use(cors()) //* cross origin resource sharing allows you to send and recive data 



//! endpoints






//! Listen/ creating a server
server.listen(4000, () => console.log('server runs on 4000'))
