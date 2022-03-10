const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

const user = await User.create({
    name,
    email,
    passwordHash,
});

createAndSendMail(user, email) 

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

  async function confirmEmail (req, res) {
    try {
      const { user } = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
      await User.findByIdAndUpdate(user, {active: true});
      res.redirect('/');
    } catch (e){
      res.send('error');
    }
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
    {
      expiresIn: '1d',
    },
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
    confirmEmail,
}