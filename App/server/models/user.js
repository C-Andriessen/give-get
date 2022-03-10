const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    active: {type: Boolean, default: false}
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;