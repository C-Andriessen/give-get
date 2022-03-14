const postController = require("../controllers/postController.js");
const auth = require('../middleware/auth');

const router = require("express").Router();

router.post('/savePost', auth.verifyUser, postController.savePost);

module.exports = router;