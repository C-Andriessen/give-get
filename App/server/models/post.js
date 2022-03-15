const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    subject: {type: String, required:true},
    content: {type: String, required: true},
    shortUrlCode: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "user"}
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;