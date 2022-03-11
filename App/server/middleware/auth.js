const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

async function auth(req, res, next) {
  try {
    const token = req.cookies["auth-token"];

    const validatedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(validatedToken.id);

    req.user = user;

    console.log(user);

    next();
  } catch (err) {
    res.status(401).end();
  }
}

module.exports = {
  auth,
}