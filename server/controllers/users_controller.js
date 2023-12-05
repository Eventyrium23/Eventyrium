const db = require("../models/index.js");
const Users = db.Users;
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const privateKey = "Eventyrium the best";

const SchemaValidation = joi.object({
  userName: joi.string().min(3).max(25).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  phone: joi.string().required(),
});

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
    const token = jwt.sign({ userName: userName }, privateKey);
    const hashPassword = await bcrypt.hash(password, 10);

    await Users.create({
      userName,
      password: hashPassword,
      email,
      phone,
      token,
      valid: false,
    });

    const link = `http://localhost:5173/user/confirm/${token}`;
    await VerifEmail(email, link);

    res.status(201).send("Message send check your Email");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Users.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(400).send("Invalid email and password");
    }
    if (existingUser && existingUser.valid) {
      const checkPassword = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (checkPassword) {
        const token = existingUser.token;
        res.status(200).json(token);
      } else {
        res.status(400).send("Invalid email and password");
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const VerifEmail = async (email, link) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "haddadaahmed9@gmail.com",
        pass: "wlpd vkxo mkfz cztg",
      },
    });

    let info = await transporter.sendMail({
      from: "haddadaahmed9@gmail.com",
      to: email,
      subject: "Account verification",
      text: "welcome in Eventyrium",
      html: ` <button style="background-color: rgb(102, 208, 102);padding: 20px;font-size: 20px;border:none"><a style="color:white;text-decoration:none" href=${link}>Active Your Account</a></button> `,
    });
  } catch (err) {
    res.send(err);
  }
};

exports.ConfirmToken = async (req, res) => {
  try {
    const token = await Users.findOne({
      where: { token: req.params.token },
    });

    if (!token) {
      return res.status(404).send("Token not valid");
    }

    await Users.update(
      { valid: true },
      {
        where: {
          token: token.token,
        },
      }
    );

    res.status(200).send("Email verified");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
