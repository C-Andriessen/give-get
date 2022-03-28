const User = require('../models/user');
const Role = require('../models/role');
const Post = require('../models/post');
const emailController = require('./emailController');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validation = require('../middleware/validation');

async function register(req, res) {
    try{
    const {name, email, password, passwordRepeat } = req.body;

      const filledIn = await validation.isFilledIn({'naam': name, email, 'wachtwoord': password, 'wachtwoord bevestigen': passwordRepeat});

      if (filledIn) {
        return res.status(400).json({
          errorMessage: filledIn,
        });
      }

      const passwordEqual = await validation.passwordEqual(password, passwordRepeat);

      if (passwordEqual) {
        return res.status(400).json({
          errorMessage: passwordEqual,
        });
      }

      const emailRegex = await validation.emailRegex(email, ["noorderpoort.nl"], ['Noorderpoort'])

      if (emailRegex) {
        return res.status(400).json({
          errorMessage: emailRegex,
        });
      }

      const passwordLength = await validation.passwordLength(password, 6);
      
      if(passwordLength) {
        return res.status(400).json({
          errorMessage: passwordLength,
        });
      }

const passwordHash = bcrypt.hashSync(password, await bcrypt.genSalt(10));

const role = await Role.findOne({name: "STUDENT"}).exec();

const user = await User.create({
    name,
    email,
    passwordHash,
    role: role._id,
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

    const filledIn = await validation.isFilledIn({email, 'wachtwoord': password})

    if (filledIn) {
      return res.status(400).json({
        errorMessage: filledIn,
      });
    }
  
    const user = await User.findOne({ email });
  
    if (!user)
      return res.status(401).json({
        errorMessage: "Gebruikersnaam of wachtwoord incorrect",
      });
  
    const passwordCorrect = bcrypt.compareSync(password, user.passwordHash);
  
    if (!passwordCorrect)
      return res.status(401).json({
        errorMessage: "Gebruikersnaam of wachtwoord incorrect",
      });

      if (!user.active) {
        return res.status(400).json({
          errorMessage: "U moet eerst uw email bevestigen",
        });
      }
  
    const token = jwt.sign(
      {
        id: user._id,
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

  async function deleteUser (req,res) {
    const user = await User.findById(req.user._id).populate('role').exec();

    if (Object.keys(req.body).length === 0) {
      for (const post of user.posts) {
        await Post.findByIdAndDelete(post);
      }
      await User.findByIdAndDelete(req.user._id);
        res.clearCookie("auth-token").redirect('/');
    } else {
      const target_user = await User.findById(req.body._id);
      switch(user.role.name) {
        case "BEHEERDER":
        case "DOCENT":
          for (const post of target_user.posts) {
            await Post.findByIdAndDelete(post);
          }
          await User.findByIdAndDelete(req.body._id).exec();
          res.redirect('/');
          break;
        case "STUDENT":
          return res.status(400).json({
            errorMessage: `Je hebt geen rechten om dit uit te voeren`,
          });
      }
    }
    
  }

module.exports = {
    register,
    login,
    logout,
    deleteUser,
}