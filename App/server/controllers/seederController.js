const Role = require('../models/role');

async function roleSeeder(req, res) {
    await Role.create({name: "BEHEERDER"})
    await Role.create({name: "DOCENT"})
    await Role.create({name: "STUDENT"})

    res.end();
}

module.exports = {roleSeeder};