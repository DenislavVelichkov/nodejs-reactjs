const mongoose = require('mongoose');
const Schema = require('mongoose');

const CubeModel = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  imageURL: { type: String },
  difficultyLevel: { type: Number },
  description: { type: String },
  accessories: [{type: Schema.Types.ObjectId, ref: 'accessory'}]
})

const Cube = mongoose.model('cube', CubeModel)

module.exports = Cube;