const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

router.route('/create').post( (req, res) => {
    const { title, body } = req.body;
    const newPost = new Post({
        title,
        body
    });

    newPost.save();
} );

router.route('/mongoPosts').get(( req, res ) => {
    Post.find().then( postData => res.json(postData) );
});

module.exports = router;
