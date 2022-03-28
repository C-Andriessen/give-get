const seederController = require("../controllers/seederController.js");

const router = require("express").Router();

router.get('/role', seederController.roleSeeder);
router.get('/user', seederController.userSeeder);
router.get('/post', seederController.postSeeder);

module.exports = router;