const express = require("express");
const User = require("../models/UserSchema");
const MessageBoard = require("../models/MessageBoardSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const conn = require("../db/connection");

const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Express is up! and running " });
});

// posting data to message board table
router.post("/messageboard", async (req, res) => {
  const { image, title, description, announcement, likes, comments } = req.body;
  if (
    !image ||
    !title ||
    !description ||
    !announcement ||
    !likes ||
    !comments
  ) {
    return res.status(422).json({ error: "Please Fill All data fields" });
  }
  try {
    const messageBoardData = {
      image,
      title,
      description,
      announcement,
      likes,
      comments,
    };
    const messageboard = await MessageBoard.create(messageBoardData);
    if (messageboard) {
      res.status(201).json({ message: "Message Board data generated" });
      console.log(messageboard.title);
    } else {
      res.status(500).json({ error: "Failed to insert data" });
    }
  } catch (error) {
    console.log(error);
  }
});

// getting data from message board table
router.get("/messageboard", async (req, res) => {
  const data = await MessageBoard.findOne({});
  if (data) {
    res.status(201).send(data);
  } else {
    res.status(400).json({ error: "error in db " });
  }
});

// register route
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please insert data in all fields" });
  }
  try {
    const userExist = await User.findOne({ where: { email: email } });
    if (userExist) {
      return res.status(422).json({ error: "THIS email Already Exist" });
    } else {
      const userData = {
        email,
        password,
      };
      const userRegistered = await User.create(userData);
      if (userRegistered) {
        res.status(201).json({ message: "user registered succesffully" });
        console.log(userRegistered.email);
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
  const { email, password } = req.body;

  const userData = await User.findOne({ where: { email } }).catch(err => {
    console.log("Error: ", err);
  });

  if (!userData) {
    return res
      .status(400)
      .json({ message: "email or password does not match!" });
  }
  const isMatch = await bcrypt.compare(password, userData.password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ message: "email or password does not match!" });
  }

  const jwtToken = jwt.sign(
    { id: userData.id, email: userData.email },
    process.env.JWT_SECRET
  );
  res.json({
    message: "Welcome Back you are Login with Token!",
    token: jwtToken,
  });
  console.log(`Token for Login is: ${jwtToken}`);
});

module.exports = router;
