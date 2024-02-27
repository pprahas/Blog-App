const User = require("../../models/UserModel");
// const bcrypt = require("bcrypt");
const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/register", async (req, res) => {
  const user = req.body;

  try {
    const dbUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    await dbUser.save();
    return res.status(200).json({ msg: "Your account has been created" });
  } catch (error) {
    return res.status(400).statusMessage("wronggg");
  }
});

router.post("/login", async (req, res) => {
  const user = req.body;
  
  try {
    const email = await User.findOne({ email: user.email});
    return res.status(200).json(email);
  } catch (error) {
    return res.status(400).statusMessage("wronggg");
  }
});

module.exports = router;
