const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config({ path: "./.env" });
require("./db/connection");
const User = require("./models/UserSchema");
const MessageBoard = require("./models/MessageBoardSchema");
const Contact = require("./models/Contact");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const publicDirectory = path.join(__dirname, "./public/");
app.use("/public", express.static(publicDirectory));

app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/users"));

User.sync()
  .then(() => console.log("User table created successfully"))
  .catch(err => console.log("Wrong db credebtials ", err));

MessageBoard.sync()
  .then(() => console.log("Message Board table created"))
  .catch(err => console.log("Something went wrong", err));

Contact.sync()
  .then(() => console.log("Contact us table created"))
  .catch(err => console.log("Something went wrong", err));

app.listen(PORT, () => {
  console.log(`Express Server listening on ${PORT}`);
});
