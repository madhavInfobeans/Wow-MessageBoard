const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const sequelize = require("../db/connection");
const Sequelize = require("sequelize");

// create Contact model
const contactSchema = sequelize.define("contact", {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.BIGINT,
  },
  message: {
    type: Sequelize.STRING,
  },
  attachment: {
    type: Sequelize.STRING,
  },
});

const Contact = contactSchema;
module.exports = Contact;
