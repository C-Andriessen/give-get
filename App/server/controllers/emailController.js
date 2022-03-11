const jwt = require("jsonwebtoken");
const User = require('../models/user');

async function confirmEmail (req, res) {
    try {
      const { user } = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
      await User.findByIdAndUpdate(user, {active: true});
      res.redirect('/');
    } catch (e){
      res.send('error');
    }
  }

  module.exports ={
      confirmEmail,
  }