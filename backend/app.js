//import modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectToDatabase = require("./database/index");
require("dotenv").config();

//app
const app = express();

connectToDatabase();

/// middlewaree
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => console.log("Server is running"));
