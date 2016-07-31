const Me = require('../models/me')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

function showMe (req, res, next) {
  Me.find({}, function (err, stuff) {
    res.status(200).json(stuff)
  })
}

function makeMe (req, res, next) {
  const me = new Me(req.body)
  me.save((err, stuff) => {
    if (err) return res.status(401).json({message: 'you fucked up somewhere'})
    res.status(201).json({message: 'success'})
  })
}

module.exports = {
  showMe: showMe,
  makeMe: makeMe
}
