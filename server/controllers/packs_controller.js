const db = require("../models/index.js");
const Packs = db.Packs;
exports.getAll = async (req, res) => {
  try {
    const allPacks = await Packs.findAll({
      where: {
        userId: null,
      },
    });
    if (Object.keys(allPacks).length > 0) {
      res.status(200).send(allPacks);
    } else {
      res.status(200).send([]);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getOne = async (req, res) => {
  const { pack } = req.params;
  try {
    const packs = await Packs.findOne({ where: { name: pack } });
    if (Object.keys(packs).length > 0) {
      res.status(200).send(packs);
    } else {
      res.status(200).send("empty");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.reservedPack = async (req, res) => {
  const { name, available, date, max_guests } = req.body;

  try {
    const onePack = await Packs.findOne({ where: { name: name } });
    if (onePack.length > 0) {
      await User.update(
        {
          available: !available,
          date: date,
          max_guests: max_guests,
        },
        {
          where: {
            name: name,
          },
        }
      );
      res.status(200).send("reserved for this date");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.checkReservedPack = async (req, res) => {
  const { name, date } = req.body;

  try {
    const onePlace = await Packs.findOne({ where: { name: name, date: date } });
    if (onePlace) {
      res.status(230).send("Reserved for this date");
    } else {
      res.status(200).send("Not reserved for this date");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.addPacks = async (req, res) => {
  const { name, image, price, max_guests, description, location } = req.body;
  try {
    const checkPack = await Packs.findOne({ where: { name: name } });
    if (checkPack) {
      res.status(200).send("this Pack is exists");
    } else {
      await Packs.create({
        name: name,
        location: location,
        image: image,
        price: price,
        max_guests,
        description: description,
        available: true,
      });
      res.status(200).send("Pack created");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
