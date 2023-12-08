const db = require("../models/index.js");
const Packs = db.Packs;
exports.getAll = async (req, res) => {
  try {
    const allPacks = await Packs.findAll();
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
      const Deco = await Packs.findOne({ where: { name: pack } });
      if (Object.keys(Deco).length > 0) {
        res.status(200).send(Deco);
      } else {
        res.status(200).send("empty");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  };