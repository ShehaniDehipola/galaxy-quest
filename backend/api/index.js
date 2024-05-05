const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("../routes/auth.route.js");

dotenv.config();

//connect database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Conncection failed: ", err);
  });

//express app
const app = express();

//allow json as inputs
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});

app.use("/auth", authRouter);

//middleware to catch any kind of error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.errmsg || "Something went wrong!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

module.exports = app;
