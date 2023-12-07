const db = require("../models/index.js");
const Foods = db.Foods;
exports.getAll = async (req, res) => {
    try {
      const allFoods = await Foods.findAll();
      if (Object.keys(allFoods).length > 0) {
        res.status(200).send(allFoods);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  exports.getOne = async (req, res) => {
    const { food } = req.params;
    try {
      const Food = await Foods.findOne({ where: { name: food } });
      if (Object.keys(Food).length > 0) {
        res.status(200).send(Food);
      } else {
        res.status(200).send("empty");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  };