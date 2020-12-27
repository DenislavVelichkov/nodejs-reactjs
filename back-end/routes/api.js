const {deleteCube, getCube, getCubes, postCreateCube} = require('../controllers/cube-controller');
const {Router} = require('express');
const router = Router();


router.route('/all-cubes')
    .get(getCubes);

router.route('/details/:id')
    .get(getCube);

router.route('/create')
    .post(postCreateCube);

router.route('/delete/:id')
    .delete(deleteCube);

module.exports = router;