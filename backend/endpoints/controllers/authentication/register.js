const router = express.Router();
router.use(express.json());
const User = require("../../models/UserModel");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const user = req.body;

  try {
    const emailCheck = await User.findOne({ email: user.email });
    if (emailCheck) {
      return res.status(400).send({ msg: "Email has already been taken." });
    }

    hashedPassword = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashedPassword,
    });
    await dbUser.save();
    return res.status(200).send({ msg: "Account creation success." });
  } catch (error) {
    return res.status(400).send({ msg: "Account creation failed." });
  }
});
