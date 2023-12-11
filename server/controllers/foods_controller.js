const db = require("../models/index.js");
const Foods = db.Foods;
exports.getAll = async (req, res) => {
  try {
    const allFoods = await Foods.findAll({
      where: {
        userId: null,
      },
    });

    if (allFoods.length > 0) {
      res.status(200).send(allFoods);
    } else {
      res.status(200).send([]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
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

exports.addFood = async (req, res) => {
  const { name, image, price, specialite} = req.body;
  try {
    const checkFood = await Foods.findOne({ where: { name: name } });
    if (checkFood) {
      res.status(200).send("this Food is exists");
    } else {
      await Foods.create({
        name: name,
        image: image,
        price: price,
        specialite: specialite,
      });
      res.status(200).send("food created");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
