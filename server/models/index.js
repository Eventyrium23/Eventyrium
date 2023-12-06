const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");

dotenv.config({ path: "./config.env" });

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbNAME = process.env.DB_NAME;
const dbDIALECT = process.env.DIALECT;

const sequelize = new Sequelize(dbNAME, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDIALECT,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to the database NEVER GIVE UPPP"))
  .catch((err) =>
    console.error("Unable to connect to the database  NEVER GIVE UPPP:", err)
  );

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.dotenv = dotenv;

/* Start here */
db.Users = require("./users_model.js")(sequelize, DataTypes);
db.Admins = require("./admins_model.js")(sequelize, DataTypes);
db.Places = require("./places_model.js")(sequelize, DataTypes);

//relation
db.Users.hasMany(db.Places, {
  foreignKey: "userId",
  as: "places",
});

db.Places.belongsTo(db.Users, {
  foreignKey: "userId",
  as: "user",
});

// db.sequelize.sync({ force: true });
module.exports = db;
