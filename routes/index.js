var express = require('express')
var router = express.Router()
var appController = require('../controllers/application_controller')
var Me = require('../models/me')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', appController.showMe)
router.post('/', appController.makeMe)

module.exports = router
