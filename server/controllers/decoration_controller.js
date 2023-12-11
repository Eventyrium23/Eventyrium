const db = require("../models/index.js");
const Decoration = db.Deco;
exports.getAll = async (req, res) => {
  try {
    const allDecoration = await Decoration.findAll({
      where: {
        userId: null,
      },
    });
    if (Object.keys(allDecoration).length > 0) {
      res.status(200).send(allDecoration);
    } else {
      res.status(200).send([]);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getOne = async (req, res) => {
  const { decoration } = req.params;
  try {
    const Deco = await Decoration.findOne({ where: { name: decoration } });
    if (Object.keys(Deco).length > 0) {
      res.status(200).send(Deco);
    } else {
      res.status(200).send("empty");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.addDecoration = async (req, res) => {
  const { name, image, price, stock } = req.body;
  try {
    const checkDeco = await Decoration.findOne({ where: { name: name } });
    if (checkDeco) {
      res.status(200).send("this Decoration item is exists");
    } else {
      await Decoration.create({
        name: name,
        image: image,
        price: price,
        stock: stock,
      });
      res.status(200).send("Decoration item created");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
