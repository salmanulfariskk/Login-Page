require('dotenv').config()
const express = require('express')

const session = require('express-session')
const nocache = require('nocache')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'fsdjkfdhfjse',
    resave: false,
    saveUninitialized: true
}))

app.use(nocache())

app.use('/', require('./routes/user.js'))

const PORT = process.env.PORT 

app.listen(PORT, () => console.log('Server listening on ' + PORT))