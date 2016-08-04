const mongoose = require('mongoose')

const meSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dob: String,
  links: [String],
  linknames: [String],
  education: [String],
  description: String,
  work: String,
  devicons: [String],
  projects: [String],
  projectlinks: [String],
  skills: [String]
})

const Me = mongoose.model('Me', meSchema)

module.exports = Me
