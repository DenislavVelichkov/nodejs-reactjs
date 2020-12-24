const Cube = require('../models/cube.js');

module.exports = {
  getCubes(req, res, next) {
    Cube.find({})
      .then(allCubes => console.log(res.json(allCubes)))
      .catch(next)
  },
  getCube(req, res, next) {
    const id = req.params.id;
    
    Cube.findById({ '_id': id }, (err, res) => {
      if (err) {
        throw err
      }
    })
    .then(selectedCube => res.json(selectedCube))
    .catch(next)
  },
  postCreateCube(req, res, next) {
    Cube.create(req.body)
      .then(newCube => res.json(newCube))
      .catch(next)
  },
  deleteCube(req, res, next) {
    const id = req.params.id;

    Cube.findByIdAndDelete({ '_id': id }, (err, res) => {
      if (err) {
        throw err
      }

    })
    .then(deletedCube => res.json(deletedCube))
    .catch(next)
  }
}