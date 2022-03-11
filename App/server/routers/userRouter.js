const { Router } = require("express");
const userController = require("../controllers/userController.js");
const auth = require('../middleware/auth');

const router = require("express").Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.delete('/confrimDelete', auth, userController.deleteSelf);

module.exports = router;