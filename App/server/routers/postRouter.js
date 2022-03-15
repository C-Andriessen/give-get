const postController = require("../controllers/postController.js");
const auth = require('../middleware/auth');

const router = require("express").Router();

router.get('/:post', postController.show);
router.post('/save', auth, postController.save);
router.post('/favorite', auth, postController.favorite);

module.exports = router;