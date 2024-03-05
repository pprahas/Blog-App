const mongoose = require("mongoose");
function connectToDatabase() {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERROR", err));
}

module.exports = connectToDatabase;
