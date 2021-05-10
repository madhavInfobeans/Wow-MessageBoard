const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000, acquire: 30000 },
});

// //  check the databse connection using promise way
// sequelize
//   .authenticate()
//   .then(() => console.log("Connection to the database created."))
//   .catch(err => console.error("Unable to connect to the database:", err));

// check database connection async await way

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Great, Connected to the DB .");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
