const express = require("express");
const User = require("../models/UserSchema");
const MessageBoard = require("../models/MessageBoardSchema");
const Contact = require("../models/Contact");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const authRoute = require("../auth/jwtAuth");

const multer = require("multer");
const emailConfig = require("../config/nodemailer");

const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads/files");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const fileFilter1 = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload1 = multer({
  storage: storage1,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter1,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Express is up! and running " });
});

// posting data to contact table
router.post("/contact", upload1.single("attachment"), async (req, res) => {
  console.log(req.file);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const message = req.body.message;
  const attachment = "../public/uploads/files/" + req.file.filename;

  if (!firstname || !lastname || !email || !mobile || !message || !attachment) {
    return res.status(422).json({ error: "Please Fill All data fields" });
  }

  try {
    const contactData = {
      firstname,
      lastname,
      email,
      mobile,
      message,
      attachment,
    };
    const contact = await Contact.create(contactData);
    if (contact) {
      let mailOptions = {
        from: {
          name: "Madhav Singh Rajput",
          address: "madhavrajput.1996@gmail.com",
        },
        to: email,
        subject: "Welcome to Wow Family",
        html: `<h2>Hey Thanks ${req.body.firstname} for your fine time to fill the form.</h2>
        <p>Your concern has been received to us. If you face any problem kindly reach out to us on 1800-230-961.</p>
        `,
        attachments: [
          {
            filename: attachment,
            path: attachment,
            contentType: "application/pdf",
          },
        ],
      };

      emailConfig.sendMail(mailOptions, (err, result) => {
        if (err) {
          console.log("Error while sending mail", err);
        }
        console.log("Email sent succesfully");
      });

      // Admin Email Block

      let mailOptionsAdmin = {
        from: {
          name: "Madhav Singh Rajput",
          address: "madhavrajput.1996@gmail.com",
        },
        cc: ["premr2676@gmail.com", "madhav.singh@infobeans.com"],
        subject: `New User Added `,
        html: `<h2>A new person ${req.body.firstname} has recently fill the form.</h2>
        <p>Check if there is any query needs to be solved, whenever you are free</p>
        <ul>
        <li>Some User Details for your Reference:</li><br>
        <li>Name : ${req.body.firstname} ${req.body.lastname}</li>
        <li>Mobile : ${req.body.mobile}</li>
        </ul>
        `,
        attachments: [
          {
            filename: attachment,
            path: attachment,
            contentType: "application/pdf",
          },
        ],
      };

      emailConfig.sendMail(mailOptionsAdmin, (err, result) => {
        if (err) {
          console.log("Error while sending mail", err);
        }
        console.log("Email sent to Admin");
      });

      res.status(201).json({ message: "Contact us data generated" });
      console.log(contact.mobile);
    } else {
      res.status(500).json({ error: "Failed to insert data" });
    }
  } catch (error) {
    console.log(error);
  }
});

// getting data from contact table
router.get("/contact", async (req, res) => {
  const data = await Contact.findAll({});
  if (data) {
    res.status(201).send(data);
  } else {
    res.status(400).json({ error: "error in db " });
  }
});

// posting data to message board table
router.post("/messageboard", upload.single("image"), async (req, res) => {
  console.log(req.file);
  const image = "./uploads/images/" + req.file.filename;
  const title = req.body.title;
  const description = req.body.description;
  const announcement = req.body.announcement;
  const likes = req.body.likes;
  const comments = req.body.comments;

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
      console.log("Message Board Data inserted into dB");
    } else {
      res.status(500).json({ error: "Failed to insert data" });
    }
  } catch (error) {
    console.log(error);
  }
});

// getting data from message board table
router.get("/messageboard", authRoute, async (req, res) => {
  const data = await MessageBoard.findAll({});
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
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  res.json({
    message: "Welcome Back you are Login with Token!",
    token: jwtToken,
  });
  console.log(`Token for Login is: ${jwtToken}`);
  // const cookieOptions = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60
  //   ),
  //   httpOnly: true,
  // };
  // res.cookie("jwt", jwtToken, cookieOptions);
});

module.exports = router;
