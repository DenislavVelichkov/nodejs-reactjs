const mongoose = require('mongoose')

const AccessoryModel = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    imageURL: { type: String }
})

const Accessory = mongoose.model('accessory', AccessoryModel)

module.exports = Accessory