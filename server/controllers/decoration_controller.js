const db = require("../models/index.js");
const Decoration = db.Deco;
exports.getAll = async (req, res) => {
  try {
    const allDecoration = await Decoration.findAll();
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