const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.load()

const logger = require('morgan')
const appController = require('./controllers/application_controller')
var routes = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI)

const Me = require('./models/me')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, email, auth_token, id')
  res.header('Access-Control-Allow-Methods', 'POST, GET')
  next()
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
