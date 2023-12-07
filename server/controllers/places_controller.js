const db = require("../models/index.js");
const Places = db.Places;

exports.getAll = async (req, res) => {
  try {
    const allplaces = await Places.findAll();
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

exports.addPlace = async (req, res) => {
  const { namePlace, image, price, description, date } = req.body;
  try {
    const place = await Places.findOne({ where: { namePlace: namePlace } });
    if (place) {
      res.status(200).send("this place is exists");
    } else {
      if (place.length < 0) {
        await Places.create({
          namePlace: namePlace,
          place: place,
          image: image,
          price: price,
          description: description,
          available: true,
          date: date,
        });
        res.status(200).send(place);
      }
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updatePlace = async (req, res) => {
  const { namePlace, place, image, price, description, available, date } =
    req.body;

  try {
    const onePlace = await Places.findOne({ where: { namePlace: namePlace } });
    if (onePlace.length > 0) {
      await User.update(
        {
          namePlace: namePlace,
          place: place,
          image: image,
          price: price,
          description: description,
          available: available,
          date: date,
        },
        {
          where: {
            namePlace: namePlace,
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
  const { namePlace, available, date } = req.body;

  try {
    const onePlace = await Places.findOne({ where: { namePlace: namePlace } });
    if (onePlace.length > 0) {
      await User.update(
        {
          available: true,
          date: date,
        },
        {
          where: {
            namePlace: namePlace,
          },
        }
      );
      res.status(200).send("reserved");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
