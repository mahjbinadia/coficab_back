const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.employe = require("./employe.model.js")(sequelize, Sequelize);
db.fourns = require("./fourns.model.js")(sequelize, Sequelize);
db.puce = require("./puce.model.js")(sequelize, Sequelize);
db.smart = require("./smart.model.js")(sequelize, Sequelize);
module.exports = db; 