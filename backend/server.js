const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config({ path: "./.env" });
require("./db/connection");
require("./auth/passport-config");
const User = require("./models/UserSchema");

const app = express();
// initialize passport with express
app.use(passport.initialize());

const PORT = process.env.PORT || 3001;

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/users"));

User.sync()
  .then(() => console.log("User table created successfully"))
  .catch(err => console.log("Wrong db credebtials "));

app.listen(PORT, () => {
  console.log(`Express Server listening on ${PORT}`);
});
