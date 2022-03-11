const User = require('../models/user');
const emailController = require('./emailController');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findByIdAndRemove } = require('../models/user');

async function register(req, res) {
    try{
    const {name, email, password, passwordRepeat } = req.body;

    if (!name || !email || !password || !passwordRepeat) {
      return res.status(400).json({
        errorMessage: "Vul alsjeblieft alle velden in",
      });
    }
  
    if (password !== passwordRepeat) {
      return res.status(400).json({
        errorMessage: "De wachtwoorden moeten hetzelfde zijn",
      });
    }

    const schoolDomainsRegex = ['noorderpoort\.nl'];
    const emailRegexPattern = new RegExp(`^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(${schoolDomainsRegex.join('|')})$`);
    
    if(!email.match(emailRegexPattern)) {
      const schools = ['Noorderpoort'];
      return res.status(400).json({
        errorMessage: `Je moet een geldig ${schools.join(', ').replace(/, ([^,]*)$/, ' of $1')} email gebruiken`,
      });
    }
  
    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Het wachtwoord moet tenminste 6 karakters lang zijn",
      });
}
const passwordHash = bcrypt.hashSync(password, await bcrypt.genSalt(10));

const user = await User.create({
    name,
    email,
    passwordHash,
    active: false,
});

emailController.createAndSendMail(user, email) 

res.redirect('/');

    } catch(err) {
      if(err.code = 11000) {
        return res.status(400).json({
          errorMessage: "De email die u heeft opgegeven is al in gebruik",
        });
      }
    }
}

async function login(req,res) {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(401).json({
        errorMessage: "Vul een geldige gebruikersnaam en wacthwoord in",
      });
  
    const userInDB = await User.findOne({ email });
  
    if (!userInDB)
      return res.status(401).json({
        errorMessage: "Gebruikersnaam of wachtwoord incorrect",
      });
  
    const passwordCorrect = bcrypt.compareSync(password, userInDB.passwordHash);
  
    if (!passwordCorrect)
      return res.status(401).json({
        errorMessage: "Gebruikersnaam of wachtwoord incorrect",
      });

      if (!userInDB.active) {
        return res.status(400).json({
          errorMessage: "U moet eerst uw email bevestigen",
        });
      }
  
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

  async function deleteUser(req,res) {
      await User.findByIdAndDelete(req.user._id);
      res.clearCookie("auth-token").redirect('/');
  }

module.exports = {
    register,
    login,
    logout,
    deleteUser,
}