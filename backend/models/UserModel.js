const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: {
    type: [{ type: mongoose.Schema.ObjectId, ref: "Blog" }],
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
