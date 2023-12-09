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
  logging: true,
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
db.Deco = require("./deco_model.js")(sequelize, DataTypes);
db.Foods = require("./food_model.js")(sequelize, DataTypes);
db.Packs = require("./pack_model.js")(sequelize, DataTypes);

// db.sequelize.sync({ force: true });

module.exports = db;
// relations user &place

db.Users.hasOne(db.Places, {
  foreignKey: "userId",
  as: "place",
});

db.Places.belongsTo(db.Users, {
  foreignKey: "userId",
  as: "user",
});

// User-Food association
db.Users.hasMany(db.Foods, {
  foreignKey: "userId",
  as: "food",
});

db.Foods.belongsTo(db.Users, {
  foreignKey: "userId",
  as: "user",
});

// User-Deco association
db.Users.hasMany(db.Deco, {
  foreignKey: "userId",
  as: "deco",
});

db.Deco.belongsTo(db.Users, {
  foreignKey: "userId",
  as: "user",
});

// User-Pack association
db.Users.hasOne(db.Packs, {
  foreignKey: "userId",
  as: "pack",
});

db.Packs.belongsTo(db.Users, {
  foreignKey: "userId",
  as: "user",
});
