const testControllers = require("../controllers/test/testController");

const router = require("express").Router();

router.get("/", testControllers.testController);

module.exports = router;