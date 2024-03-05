const express = require("express");
const router = express.Router();

class AuthenticationRoutes {
  constructor() {
    this.router = router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", login);
  }
}

module.exports = AuthenticationRoutes;
