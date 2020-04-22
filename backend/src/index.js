const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app  = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect(
    'mongodb+srv://brunocarsten:brunocarsten.admin@cluster0-pfag5.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

// Global use for io Object (Middleware)
app.use( (req,res, next) => {
    req.io = io

    next()
})

// Make routes accessible to frontend
app.use(cors())

app.use('/files', express.static( path.resolve(__dirname, '..', 'uploads', 'resized') ))

// routes
app.use( require('./routes'))

server.listen(3000)

// io.on('connection', (socket) => {
//     console.log('SOCKET', socket.id)
// })