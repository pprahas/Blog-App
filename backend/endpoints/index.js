const authRoutes = require("./routes/auth/auth");
app.use("/auth", authRoutes);

const blogRoutes = require("./routes/blog/blog");
app.use("/blog", blogRoutes);
