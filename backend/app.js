//import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//db
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

/// middlewaree
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
const authRoutes = require("./routes/auth/auth");
app.use("/auth", authRoutes);

const blogRoutes = require("./routes/blog/blog");
app.use("/blog", blogRoutes);

// const authRoutes = require("./routes")

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => console.log("Server is running"));
