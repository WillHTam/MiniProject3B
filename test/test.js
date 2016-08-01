/* globals describe it before */
var util = require('util')
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const app = require('../app')
const Me = require('../models/me')
const appController = require('../controllers/application_controller')

var me = [{
  name: 'William H. Tam',
  dob: 'January 14, 1989',
  links: ['https://github.com/willhtam'],
  education: ['BA Economics & Environment, University of California Berkeley', 'Web Development Immersive, General Assembly'],
  description: 'Full Stack Developer',
  work: 'Analyst, Northstar Pacific Capital',
  projects: ['collabdraw', 'potatobutton'],
  projectlinks: ['https://github.com/WillHTam/collabdraw', 'https://github.com/WillHTam/PotatoButton'],
  skills: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails', 'NodeJS', 'AngularJS', 'MongoDB', 'PostgresQL', 'ReactJS', 'Socket.io', 'Express']
}]

describe('GET /', function() {
  this.timeout(50000)
  before ((done) => {
    Me.find().remove((err) => console.log('delete all'))
    done()
  })
  it('should return a 200 response', (done) => {
    api.get('/')
    .set('Accept', 'application/html')
    .expect(200, done)
  })
})

describe('POST /', () => {
  this.timeout(50000)
  it ('should return "success"'), (done) => {
    api.post('/')
    .send(me[0])
    .set('Accept', 'application/html')
    .expect(201, done)
  }
})
