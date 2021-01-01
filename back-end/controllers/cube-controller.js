const AccessorySchema = require('../models/accesssory');
const CubeSchema = require('../models/cube');

module.exports = {
    getCubes(req, res, next) {
        CubeSchema.find({})
            .then(allCubes => {
                res.json(allCubes)
            })
            .catch(next)
    },
    getCube(req, res, next) {
        const id = req.params.id;

        CubeSchema.findById({'_id': id}, (err, res) => {
            if (err) {
                throw err
            }
        })
            .then(selectedCube => res.json(selectedCube))
            .catch(next)
    },
    postCreateCube(req, res, next) {
        CubeSchema.create(req.body)
            .then(newCube => {
                res.json(newCube)
            })
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
        const {targetID} = req.body.json()
        console.log(targetID)

        CubeSchema.find({_id: targetID})
            .then(cube => {
                cube.accessories.push()
                cube.save()
            })
            .catch(next)
    },
    deleteCube(req, res, next) {
        const id = req.params.id;

        CubeSchema.findByIdAndDelete({'_id': id}, (err, res) => {
            if (err) {
                throw err
            }

        })
            .then(deletedCube => res.json(deletedCube))
            .catch(next)
    }
}