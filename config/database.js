require('dotenv').config();
const config = require('./config');

module.exports = {
  username: config.db_user,
  password: config.db_pass,
  database: config.db_name,
  host: config.db_host,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}