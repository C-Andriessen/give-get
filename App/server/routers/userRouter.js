const userController = require("../controllers/userController.js");

const router = require("express").Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;