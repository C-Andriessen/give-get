const testModel = require("../../models/test/test");

async function testController(req, res) {
    await testModel.create({name: 'test'});
    res.end();
}

module.exports = {
    testController,
}