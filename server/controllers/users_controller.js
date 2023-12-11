const db = require("../models/index.js");
const Users = db.Users;
const Place = db.Places;
const Decoration = db.Deco;
const Pack = db.Packs;
const Food = db.Foods;
const FeedBacks = db.FeedBacks;
const twilio = require("twilio");

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
    const id = crypto.randomUUID();

    const hashPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign(
      { userName: userName, id: id, confirmed: false },
      privateKey
    );
    await Users.create({
      id,
      userName,
      password: hashPassword,
      email,
      phone,
      token,
      valid: false,
      confirmed: false,
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
    } else {
      res.status(401).send("Invalid email and password");
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

exports.getUser = (req, res) => {
  const { userId } = req.params;
  db.Users.findByPk(userId, {
    attributes: { exclude: ["password", "token", "valid"] },
    include: [
      {
        model: Place,
        as: "place",
      },
      {
        model: Food,
        as: "food",
      },
      {
        model: Decoration,
        as: "deco",
      },
      {
        model: Pack,
        as: "pack",
      },
      {
        model: FeedBacks,
        as: "FeedBack"
      }
    ],
  })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.updateUserConfimation = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await Users.update(
      {
        confirmed: true,
      },
      { where: { id: userId } }
    );
    res.status(200).send("done")
  } catch (err) {
    res.status(400).send(err);
  }
};

//send SMS
async function sendSMS(phoneNumber) {
  const client = new twilio(
    process.env.TWILIO_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    const message = await client.messages.create({
      body: "Welcome to Eventyrium! 🎉 Get ready for unforgettable moments and incredible experiences. Whether you're a valued client or cherished guest, your presence makes our events special. Let's create memories together! #EventyriumMagic ✨",
      from: "+12017620178",
      to: `+216${phoneNumber}`,
    });

    console.log(message.sid);
    return message.sid;
  } catch (error) {
    console.error("Error sending SMS:", error);
    throw error;
  }
}


// food
exports.createFood = async (req, res) => {
  try {
    const data = req.body;
    const foodItem = await Food.bulkCreate(data);

    console.log("Food item created for user:", foodItem);

    res.send(foodItem);
  } catch (error) {
    console.error("Error creating food item:", error);
    res.status(500).send("Internal Server Error");
  }
};

// deco
exports.createDeco = async (req, res) => {
  try {
    const data = req.body;
    const decoItem = await Decoration.bulkCreate(data);

    console.log("Deco item created for user:", decoItem);

    res.send(decoItem);
  } catch (error) {
    console.error("Error creating deco item:", error);
    res.status(500).send("Internal Server Error");
  }
};

// pack
exports.createPack = async (req, res) => {
  try {
    const {
      image,
      name,
      description,
      price,
      max_guests,
      location,
      date,
      persons,
      userId,
      phoneNumber,
    } = req.body;

    const packItem = await Pack.create({
      image,
      name,
      description,
      price,
      max_guests,
      location,
      available: false,
      date,
      persons,
      userId,
    });

    console.log("Pack item created for user:", packItem);
    // sendSMS(phoneNumber);
    res.send(packItem);
  } catch (error) {
    console.error("Error creating pack item:", error);
    res.status(500).send("Internal Server Error");
  }
};

// place
exports.createPlace = async (req, res) => {
  try {
    const { name, location, image, price, description, phoneNumber, date, persons, userId } =
      req.body;

    const placeItem = await Place.create({
      name,
      location,
      image,
      price,
      description,
      available: false,
      date,
      persons,
      userId,
    });

    console.log("Place item created for user:", placeItem);
    res.send(placeItem);
    // sendSMS(phoneNumber);
  } catch (error) {
    console.error("Error creating place item:", error);
    res.status(500).send("Internal Server Error");
  }
};

// feedBack:
exports.createFeedBacks = async (req,res) => {
  try {
    const { feed, userId } = req.body
    const feeds = await FeedBacks.create({ feed, userId })
    res.status(200).json(feeds)
  } catch (err) {
    res.status(400).send(err)
  }
}
