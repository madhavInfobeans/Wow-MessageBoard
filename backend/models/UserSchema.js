const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const sequelize = require("../db/connection");
const Sequelize = require("sequelize");

// create user model
const userSchema = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    set(value) {
      const hash = bcrypt.hashSync(value, 12);
      this.setDataValue("password", hash);
    },
  },
});

const User = userSchema;
module.exports = User;
