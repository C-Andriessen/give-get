const jwt = require("jsonwebtoken");
const User = require('../models/user');
const nodemailer = require("nodemailer");

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
    );
    
    const url = `http://localhost:5000/api/confirmation/${emailToken}`;
    
    transporter.sendMail({
      to: email,
      subject: 'Bevestig email',
      html: `Klik op deze link om je email te verifi&euml;ren: <a href="${url}">${url}</a>`,
    });
  }

  module.exports ={
      confirmEmail,
      createAndSendMail,
  }