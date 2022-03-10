const User = require('../models/user');
const bcrypt = require("bcrypt");

async function register(req,res) {
    const {name, email, password, passwordRepeat } = req.body;

    if (!name || !email || !password || !passwordRepeat) {
      return res.status(400).json({
        errorMessage: "Please enter all required fields.",
      });
    }
  
    if (password !== passwordRepeat) {
      return res.status(400).json({
        errorMessage: "The passwords must match.",
      });
    }
  
    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "The password must be at least 6 characters.",
      });
}
const passwordHash = bcrypt.hashSync(password, await bcrypt.genSalt(10));

await User.create({
    name,
    email,
    passwordHash,
});

res.redirect('/');
}

module.exports = {
    register,
}