const { Sequelize, DataTypes } = require("sequelize");
const db = require("../models/index.js");
const Selection = db.Selections;
const User = db.Users;
const Food = db.Foods;
const Decoration = db.Deco;
const Pack = db.Packs;
const Place = db.Places;

exports.create = (req, res) => {
  const { userI, itemId, itemType, date } = req.body;

  Selection.create({
    userI,
    itemId,
    itemType,
    date,
  })
    .then((selection) => {
      // Assuming itemType is either "food" or "place"
      if (itemType === "place") {
        Place.create({
          selectionId: selection.id,
          name: "Le Sérail",
          location: "Sousse,Tunisia",
          image:
            "https://i2.wp.com/www.events-places.com/wp-content/uploads/2020/12/10.jpg",
          price: "100",
          description: "ddd",
          available: true,
        });
      } else if (itemType === "food") {
        Food.create({
          selectionId: selection.id,
          specialite: "Italian",
          price: "515",
          image: "sdfdsfd",
          name: "pasta",
        });
      }

      res.send("Selection created successfully");
    })
    .catch((error) => {
      console.error("Error creating selection:", error);
      res.status(500).send("Internal Server Error");
    });
};

// {
//   "userI": 1,
//   "itemId": 2,
//   "itemType": "place",
//   "date": "2023/5/19"
// }

exports.user = (req, res) => {
  const { userI } = req.body;

  User.findByPk(userI, {
    include: [
      {
        model: Selection,
        as: "selections",
        include: [
          {
            model: Food,
            as: "food",
          },
          {
            model: Decoration,
            as: "decos",
          },
          {
            model: Pack,
            as: "packs",
          },
          {
            model: Place,
            as: "places",
          },
        ],
      },
    ],
  })
    .then((user) => {
      // Handle the user object, which includes selections and associated models
      res.send(user.toJSON());
    })
    .catch((error) => {
      console.error("Error retrieving user selections:", error);
    });
};

exports.pack = (req, res) => {
  const { itemId, date } = req.body;

  Pack.findByPk(itemId, {
    include: [
      {
        model: Selection,
        as: "selections",
        where: {
          date: date,
        },
      },
    ],
  })
    .then((pack) => {
      if (!pack) {
        res.send(`Pack ${itemId} not found.`);
      } else {
        const isAvailable =
          !pack.packSelections || pack.packSelections.length === 0;
        res.send(
          `Pack ${itemId} is ${
            isAvailable ? "available" : "not available"
          } on ${date}.`
        );
      }
    })
    .catch((error) => {
      console.error("Error checking pack availability:", error);
      res.status(500).send("Internal Server Error");
    });
};

exports.place = (req, res) => {
  const { itemId, date } = req.body;

  Place.findByPk(itemId, {
    include: [
      {
        model: Selection,
        as: "placeSelections",
        where: {
          date: date,
        },
      },
    ],
  })
    .then((place) => {
      if (!place) {
        res.send(`Place ${itemId} not found.`);
      } else {
        const isAvailable =
          !place.placeSelections || place.placeSelections.length === 0;
        res.send(
          `Place ${itemId} is ${
            isAvailable ? "available" : "not available"
          } on ${date}.`
        );
      }
    })
    .catch((error) => {
      console.error("Error checking place availability:", error);
      res.status(500).send("Internal Server Error");
    });
};
