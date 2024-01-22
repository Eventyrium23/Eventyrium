const db = require("../models/index.js");
const Invitation = db.invitation;
exports.makeInv = async (req, res) => {
  const { receiver, sender, avenue, status } = req.body;
  try {
    const newInvitation = {
      receiver: receiver,
      sender: sender,
      avenue: avenue,
      status: status,
    };
    await Invitation.create(newInvitation);

    res.status(200).send("invite sent");
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.allInv = async (req, res) => {
  const { sender } = req.body;
  try {
    var data = await Invitation.findAll({ where: { sender: sender } });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
exports.acceptInv = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  try {
    await Invitation.update(
      { status: "accepted" },
      {
        where: {
          id: id,
        },
      }
    );
  } catch (err) {}
};

exports.declineInv = async (req, res) => {
  const { id } = req.body;
  try {
    Invitation.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Invite Deleted");
  } catch (err) {
    res.status(420).send("err");
  }
};

exports.changeAvenue = async (req, res) => {
  const { newAvenue, event } = req.body;

  try {
    await Invitation.update(
      { avenue: newAvenue },
      {
        where: { event: event },
      }
    );
    res.status(200).send("Avenue Changed");
  } catch (err) {
    res.status(400).send(err);
  }
};
