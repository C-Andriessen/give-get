const User = require('../models/user');

async function testUserController(req,res) {
    await User.create({name: 'Test User', email: 'testemail@test.nl', passwordHash: '123456'});
    res.end();
}

module.exports = {
    testUserController,
}