const express = require("express");
const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Express is up! and running " });
});

// register route
router.post("/register", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(422).json({ error: "plz fill all fields" });
  }
  try {
    const userExist = await User.findOne({ where: { name: name } });
    if (userExist) {
      return res.status(422).json({ error: "THIS Name Already Exist" });
    } else {
      const userData = {
        name,
        password,
      };
      const userRegistered = await User.create(userData);
      if (userRegistered) {
        res.status(201).json({ message: "user registered succesffully" });
        console.log(userRegistered.name);
      } else {
        res.status(500).json({ error: "Failed to register" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

//Login Route
router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  const userData = await User.findOne({ where: { name } }).catch(err => {
    console.log("Error: ", err);
  });

  if (!userData) {
    return res
      .status(400)
      .json({ message: "name or password does not match!" });
  }
  const isMatch = await bcrypt.compare(password, userData.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ message: "name or password does not match!" });
  }

  const jwtToken = jwt.sign(
    { id: userData.id, name: userData.name },
    process.env.JWT_SECRET
  );
  res.json({
    message: "Welcome Back you are Login with Token!",
    token: jwtToken,
  });
  console.log(`Token for Login is: ${jwtToken}`);
});

module.exports = router;
