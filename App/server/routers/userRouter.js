const userController = require("../controllers/userController.js");
const auth = require('../middleware/auth');

const router = require("express").Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.delete('/confirmDelete', auth, userController.deleteUser);

module.exports = router;