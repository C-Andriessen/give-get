const Post = require('../models/post');
const validation = require('../middleware/validation');

async function save(req, res) {
    const user = req.user;
    const { subject, content } = req.body;

    const filledIn = await validation.isFilledIn({'onderwerp': subject, 'omschrijving': content})

    if(filledIn) {
        return res.status(400).json({
            errorMessage: filledIn,
        });
    }

    const post = await Post.create({subject: subject, content: content, user: user._id});

    user.posts.push(post);
    user.save();

    res.redirect('/');
}

module.exports = {
    save,
}