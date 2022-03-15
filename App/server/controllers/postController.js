const Post = require('../models/post');
const User = require('../models/user');
const validation = require('../middleware/validation');
const shortlink = require('shortlink');

async function show (req, res) {
    const post = await Post.findById(req.params.post).populate('user').exec();
    console.log(post);
    res.end();
}

async function showShort (req, res) {
    const post = await Post.findOne({shortUrl: req.params.shortUrlCode})
    res.redirect(`/api/post/${post._id}`);
}

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
    
    const shortUrlCode = shortlink.generate(8);

    await Post.findByIdAndUpdate(post._id, {shortUrlCode});

    await User.updateOne({ _id: user._id }, { $push: {
        posts: [{_id: post._id}],
        }, 
    });
    

    res.redirect('/');
}

async function favorite(req, res) {
    const user = req.user;
    const postId = req.body._id;
    
    if (user.favorite_posts.includes(postId)) {
        await User.updateOne({ _id: user._id }, { $pullAll: {
            favorite_posts: [{_id: postId}],
        }, 
    });
    } else {
        await User.updateOne({ _id: user._id}, { $push: {
            favorite_posts: [{_id: postId}],
        },
    });
    }

    res.redirect('/')
  }

module.exports = {
    save,
    favorite,
    show,
    showShort,
}