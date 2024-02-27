const User = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/register", async (req, res) => {
  const user = req.body;

  try {
    const emailCheck = await User.findOne({ email: user.email });
    if (emailCheck) {
      return res.status(400).json({ msg: "Email has already been taken." });
    }

    hashedPassword = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashedPassword,
    });
    await dbUser.save();
    return res.status(200).json({ msg: "Account creation success." });
  } catch (error) {
    return res.status(400).statusMessage("Account creation failed.");
  }
});

router.post("/login", async (req, res) => {
  const user = req.body;

  try {
    const email = await User.findOne({ email: user.email });
    return res.status(200).json(email);
  } catch (error) {
    return res.status(400).statusMessage("wronggg");
  }
});

module.exports = router;
