const postController = require("../controllers/postController.js");
const auth = require('../middleware/auth');

const router = require("express").Router();

router.post('/save', auth, postController.save);

module.exports = router;