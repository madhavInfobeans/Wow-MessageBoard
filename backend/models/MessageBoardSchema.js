const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const sequelize = require("../db/connection");
const Sequelize = require("sequelize");

// create Message Board model
const messageBoardSchema = sequelize.define("messageboard", {
  image: {
    type: Sequelize.BLOB,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  announcement: {
    type: Sequelize.STRING,
  },
  likes: {
    type: Sequelize.INTEGER,
  },
  comments: {
    type: Sequelize.INTEGER,
  },
});

const MessageBoard = messageBoardSchema;
module.exports = MessageBoard;
