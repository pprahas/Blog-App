const User = require("../../models/UserModel");
const Blog = require("../../models/BlogModel");
const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/create", async (req, res) => {
  const data = req.body;

  try {
    const user = await User.findById(data.ID);
    if (!user) {
      return res.status(400).send({ msg: "User does not exist" });
    }

    let now = Date();

    const dbBlog = new Blog({
      content: data.blog.content,
      title: data.blog.title,
      date: now,
    });

    user.blogs.push(dbBlog);

    await user.save();
    await dbBlog.save();
    return res.status(200).send({ msg: "Blog creation success." });
  } catch (error) {
    return res.status(400).send({ msg: "Blog creation failed." });
  }
});

module.exports = router;
