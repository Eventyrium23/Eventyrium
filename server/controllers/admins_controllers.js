const db = require("../models/index.js");
const Admins = db.Admins;
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const privateKey = "Eventyrium the best";

const SchemaValidation = joi.object({
  adminName: joi.string().min(3).max(25).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  phone: joi.string().required(),
});

exports.Register = async (req, res) => {
  const { adminName, email, phone, password, image } = req.body;
  try {
    const validation = SchemaValidation.validate({
      adminName,
      email,
      password,
      phone,
    });

    if (validation.error) {
      return res.status(400).send(validation.error.details[0].message);
    }

    const existingAdmin = await Admins.findAndCountAll({ where: { email } });

    if (existingAdmin.count !== 0) {
      return res.status(409).send("This email is already in use.");
    }
    const id = crypto.randomUUID();
    const token = jwt.sign({ id: id }, privateKey);
    const hashPassword = await bcrypt.hash(password, 10);

    await Admins.create({
      id:id,
      adminName,
      password: hashPassword,
      email,
      phone,
      token,
      image,
    });

    res.status(201).send("Welcome");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admins.findOne({ where: { email } });

    if (!existingAdmin) {
      return res.status(400).send("Invalid email and password");
    }
    if (existingAdmin) {
      const checkPassword = await bcrypt.compare(
        password,
        existingAdmin.password
      );

      if (checkPassword) {
        const token = existingAdmin.token;
        res.status(200).send(token);
      } else {
        res.status(400).send("Invalid email and password");
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getAll = async (req, res) => {
  try {
    const adminData = await Admins.findAll({});
    res.status(200).send(adminData);
  } catch (err) {
    res.status(400).send("error happen in getAll Admins", err);
  }
};
exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const adminData = await Admins.findOne({ where: { id: id } });
console.log(id);
    res.status(200).send(adminData);
  } catch (err) {
    res.status(400).send("error happen in getAll Admins", err);
  }
};
