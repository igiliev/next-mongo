const mongoose = require('mongoose');

const postSchema = {
    title: String,
    body: String
}

const Post = mongoose.model('Post', postSchema);

module.exports = Post;