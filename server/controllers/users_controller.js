const db = require("../models/index.js");
const Users = db.Users;
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const privateKey = "first try with jsonwebtoken & joi & bcrypt";

const SchemaValidation = joi.object({
  userName: joi.string().min(3).max(25).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  phone: joi.string().required(),
});
exports.Login = async (req, res) => {
  try {
    res.send("user here Test");
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
exports.Register = async (req, res) => {
  const { userName, email, phone, password } = req.body;
  try {
    const validation = SchemaValidation.validate({
      userName,
      email,
      password,
      phone,
    });

    if (validation.error) {
      return res.status(400).send(validation.error.details[0].message);
    }

    const existingUser = await Users.findAndCountAll({ where: { email } });

    if (existingUser.count !== 0) {
      return res.status(409).send("This email is already in use.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await Users.create({
      userName,
      password: hashPassword,
      email,
      phone,
    });

    res.status(201).send("Registration successful.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Users.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(400).send("Invalid email and password");
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password);

    if (checkPassword) {
      const token = jwt.sign(
        { id: existingUser.id, userName: existingUser.userName },
        privateKey
      );
      res.status(200).json(token);
    } else {
      res.status(400).send("Invalid email and password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
