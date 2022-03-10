const userController = require("../controllers/userController.js");

const router = require("express").Router();

router.get('/testuser', userController.testUserController);

module.exports = router;