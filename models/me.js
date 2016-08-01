const mongoose = require('mongoose')

const meSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dob: String,
  links: [String],
  education: [String],
  description: String,
  work: String,
  projects: [String],
  projectlinks: [String],
  skills: [String]
})

const Me = mongoose.model('Me', meSchema)

module.exports = Me
