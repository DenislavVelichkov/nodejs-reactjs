const AccessorySchema = require('../models/accesssory');
const CubeSchema = require('../models/cube');

module.exports = {
    getCubes(req, res, next) {
        CubeSchema.find({})
            .exec()
            .then(allCubes => {
                res.json(allCubes)
            })
            .catch(next)
    },
    getAccessories(req, res, next) {
        AccessorySchema.find({})
            .exec()
            .then(allAccessories => {
                res.json(allAccessories)
            })
            .catch(next)
    },
    getCube(req, res, next) {
        const id = req.params.id;

        CubeSchema.findById({'_id': id})
            .exec()
            .then(selectedCube => res.json(selectedCube))
            .catch(next)
    },
    postCreateCube(req, res, next) {
        CubeSchema.create(req.body)
            .then(newCube => res.json(newCube))
            .catch((error) => console.log(error))
            .catch(next)
    },
    postCreateAccessory(req, res, next) {
        AccessorySchema.create(req.body)
            .then(newAccessory => {
                res.json(newAccessory)
            })
            .catch(next)
    },
    attachAccessory(req, res, next) {
        const {attachToCubeId, accessoryId} = req.body

        CubeSchema.updateOne({_id: attachToCubeId}, {
            $push: {
                accessories: accessoryId
            }
        }).exec()
            .then((cube) => res.json(cube))
            .catch(next)
    },
    deleteCube(req, res, next) {
        const id = req.params.id;

        CubeSchema.findByIdAndDelete({'_id': id})
            .exec()
            .then((deletedCube) => res.json(deletedCube))
            .catch(next)
    }
}