const Post = require('../models/post');
const validation = require('../middleware/validation');
const User = require('../models/user');

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

async function favorite(req, res) {
    const user = req.user;
    const favorite_posts = user.favorite_posts
    const postId = req.body._id;
    
    if (favorite_posts.includes(postId)) {
        for (let i = 0; i < favorite_posts.length; i++) {
            if(favorite_posts[i] == postId) {
                favorite_posts.splice(i, 1);
            }
        }
    } else {
        favorite_posts.push(postId);
    }
    user.save()

    res.redirect('/')
  }

module.exports = {
    save,
    favorite,
}