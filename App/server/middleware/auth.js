const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

async function auth(req, res, next) {
  try {
    const token = req.cookies["auth-token"];

    const validatedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(validatedToken.id);

    req.user = user;

    if (!user.active) {
      return res.status(400).json({
        errorMessage: "U moet eerst uw email bevestigen",
      });
    }

    next();
  } catch (err) {
    res.status(401).end();
  }
}

module.exports = {
  auth,
}