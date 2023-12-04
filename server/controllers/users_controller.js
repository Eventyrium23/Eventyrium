const db = require("../models/index.js");
const Users = db.Users;

exports.Login = async (req, res) => {
  try {
    res.send("user here Test");
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
