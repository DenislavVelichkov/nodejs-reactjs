const mongoose = require('mongoose');
const CubeSchema = mongoose.Schema

const CubeModel = new CubeSchema({
  id: { type: String },
  name: { type: String },
  imageURL: { type: String },
  difficultyLevel: { type: Number },
  description: { type: String }
})

const Cube = mongoose.model('cube', CubeModel)

module.exports = Cube;