const router = express.Router();
router.use(express.json());
const User = require("../../models/UserModel");
const bcrypt = require("bcrypt");

export async function loginPatient(req, res) => {

}
router.post("/login", async (req, res) => {
  const user = req.body;

  try {
    const dbUser = await User.findOne({ email: user.email });
    if (!dbUser) {
      return res.status(400).send({ msg: "Incorrect Email or Password" });
    }
    bcrypt.compare(user.password, dbUser.password).then((match) => {
      if (match) {
        return res.status(200).send(dbUser);
      }
      return res.status(400).send({ msg: "Incorrect Email or Password" });
    });
  } catch (error) {
    return res.status(400).send({ msg: "Login failed" });
  }
});

module.exports = router;
