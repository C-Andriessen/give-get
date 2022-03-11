const seederController = require("../controllers/seederController.js");

const router = require("express").Router();

router.get('/role', seederController.roleSeeder);
router.get('/user', seederController.userSeeder);

module.exports = router;