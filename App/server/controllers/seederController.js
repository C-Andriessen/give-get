const Role = require('../models/role');
const User = require('../models/user');
const bcrypt = require("bcrypt");

async function roleSeeder(req, res) {
    await Role.create({name: "BEHEERDER"})
    await Role.create({name: "DOCENT"})
    await Role.create({name: "STUDENT"})

    res.end();
}

async function userSeeder(req, res) {
    const beheerder = await Role.findOne({name: "BEHEERDER"}).exec();
    const docent = await Role.findOne({name: "DOCENT"}).exec();
    const student = await Role.findOne({name: "STUDENT"}).exec();

    await User.create({name: "Beheerder test user", email: "beheerder@giveandget.nl", passwordHash: bcrypt.hashSync("giveget", await bcrypt.genSalt(10)), active: true, role: beheerder._id});
    await User.create({name: "Docent test user", email: "docent@giveandget.nl", passwordHash: bcrypt.hashSync("giveget", await bcrypt.genSalt(10)), active: true, role: docent._id});
    await User.create({name: "Student test user", email: "student@giveandget.nl", passwordHash: bcrypt.hashSync("giveget", await bcrypt.genSalt(10)), active: true, role: student._id});

    res.end();
}

module.exports = {
    roleSeeder,
    userSeeder
};