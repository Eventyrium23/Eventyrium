const db = require("../models/index.js");
const Places = db.Places;

exports.getAll = async (req, res) => {
  try {
    const allplaces = await Places.findAll({
      where: {
        userId: null,
      },
    });
    if (Object.keys(allplaces).length > 0) {
      res.status(200).send(allplaces);
    } else {
      res.status(200).send([]);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getOne = async (req, res) => {
  const { place } = req.params;
  try {
    const onePlace = await Places.findOne({ where: { name: place } });
    if (Object.keys(onePlace).length > 0) {
      res.status(200).send(onePlace);
    } else {
      res.status(200).send("empty");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updatePlace = async (req, res) => {
  const { name, location, image, price, description, available, date } =
    req.body;

  try {
    const onePlace = await Places.findOne({ where: { name: name } });
    if (onePlace.length > 0) {
      await User.update(
        {
          name: name,
          location: location,
          image: image,
          price: price,
          description: description,
          available: available,
          date: date,
        },
        {
          where: {
            name: name,
          },
        }
      );
      res.status(200).send(onePlace);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.reservedPlace = async (req, res) => {
  const { name, available, date } = req.body;

  try {
    const onePlace = await Places.findOne({ where: { name: name } });
    if (onePlace.length > 0) {
      await User.update(
        {
          available: !available,
          date: date,
        },
        {
          where: {
            name: name,
          },
        }
      );
      res.status(200).send("reserved");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.checkReservedPlace = async (req, res) => {
  const { name, date } = req.body;

  try {
    const onePlace = await Places.findOne({
      where: { name: name, date: date },
    });
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

exports.addPlace = async (req, res) => {
  const { name, image, price, description, location } = req.body;
  try {
    const checkPlace = await Places.findOne({ where: { name: name } });
    if (checkPlace) {
      res.status(200).send("this location is exists");
    } else {
      await Places.create({
        name: name,
        location: location,
        image: image,
        price: price,
        description: description,
        available: true,
      });
      res.status(200).send("Location create");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
