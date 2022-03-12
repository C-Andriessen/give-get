const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true},
    passwordHash: { type: String, required: true },
    active: {type: Boolean, required: true},
    role: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "role" },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;