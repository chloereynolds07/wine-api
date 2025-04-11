const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

server.use('/', router)

server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`girl you're not even old enough to drink wine ${3000}`))