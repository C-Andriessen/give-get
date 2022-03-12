const Post = require('../models/post');

async function savePost(req, res) {
    const user = req.user;
    const { subject, content } = req.body;

    const post = await Post.create({subject: subject, content: content, user: user._id});

    user.posts.push(post);
    user.save();

    res.redirect('/');
}

module.exports = {
    savePost,
}