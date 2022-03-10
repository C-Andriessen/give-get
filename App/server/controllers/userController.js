const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const schoolDomainsRegex = ['noorderpoort\.nl'];
    const emailRegexPattern = new RegExp(`^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(${schoolDomainsRegex.join('|')})$`);
    
    if(!email.match(emailRegexPattern)) {
      const schools = ['noorderpoort'];
      return res.status(400).json({
        errorMessage: `Je moet een geldig ${schools.join(', ').replace(/, ([^,]*)$/, ' of $1')} email gebruiken`,
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

async function login(req,res) {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(401).json({
        errorMessage: "Please enter all required data.",
      });
  
    const userInDB = await User.findOne({ email });
  
    if (!userInDB)
      return res.status(401).json({
        errorMessage: "Login failed.",
      });
  
    const passwordCorrect = bcrypt.compareSync(password, userInDB.passwordHash);
  
    if (!passwordCorrect)
      return res.status(401).json({
        errorMessage: "Login failed.",
      });
  
    const token = jwt.sign(
      {
        id: userInDB._id,
      },
      process.env.JWT_SECRET
    );
  
    res
      .cookie("auth-token", token, {
        httpOnly: true,
      })
      .redirect('/');
  }

  async function logout(req, res) {
    res.clearCookie("auth-token").redirect('/');
  }

module.exports = {
    register,
    login,
    logout,
}