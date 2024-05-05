const express = require("express");
const {
  signup,
  signin,
  signout,
} = require("../controllers/auth.controller.js");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", signin);
authRouter.get("/signout", signout);

module.exports = authRouter;
