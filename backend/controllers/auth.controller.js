const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error.js");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res, next) => {
  const { email, username, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ email, username, password: hashedPassword });
  try {
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    next(error);
  }
};

//API for sign in
module.exports.signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    //check if the username exists
    const validUser = await User.findOne({ username });
    if (!validUser) return next(errorHandler(404, "User not found!"));

    //check if the password is correct
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(401, "Invalid user credentials!"));

    //generate jwt token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    //destructure the password
    const { password: pass, ...rest } = validUser._doc;

    //save the token as a cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

//API for sign out
module.exports.signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};
