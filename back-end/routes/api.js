const {
    deleteCube,
    getCube,
    getCubes,
    postCreateCube,
    postCreateAccessory,
    attachAccessory
} = require("../controllers/cube-controller");
const {Router} = require("express");
const router = Router();


router.route('/all-cubes')
    .get(getCubes);

router.route('/details/:id')
    .get(getCube);

router.route('/create/cube')
    .post(postCreateCube);

router.route('/create/accessory')
    .post(postCreateAccessory);

router.route('/attach/accessory')
    .post(attachAccessory);

router.route('/delete/:id')
    .delete(deleteCube);

module.exports = router;