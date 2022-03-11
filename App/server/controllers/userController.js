const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

    const schoolDomainsRegex = ['noorderpoort\.nl', 'alfa-college\.nl'];
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

createAndSendMail(user, email) 

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

function createAndSendMail(user, email) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  });
  
  const emailToken = jwt.sign(
    {
      user: user._id,
    },
    process.env.EMAIL_SECRET,
  );
  
  const url = `http://localhost:5000/api/confirmation/${emailToken}`;
  
  transporter.sendMail({
    from: 'giveandget@dont-reply.com',
    to: email,
    subject: 'Bevestig email',
    html: `Klik op deze link om je email te verifi&euml;ren: <a href="${url}">${url}</a>`,
  });

  }

module.exports = {
    register,
    login,
    logout,
}