const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors");

dotenv.config({ path: "./.env" });
require("./db/connection");
require("./auth/passport-config");
const User = require("./models/UserSchema");

const app = express();
// initialize passport with express
app.use(passport.initialize());

const PORT = process.env.PORT || 3001;

app.use(cors());

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/users"));

User.sync()
  .then(() => console.log("User table created successfully"))
  .catch(err => console.log("Wrong db credebtials "));

app.listen(PORT, () => {
  console.log(`Express Server listening on ${PORT}`);
});
