const { Sequelize } = require("sequelize");

require("dotenv").config();

const database = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mssql",
});

module.exports = sequelize;