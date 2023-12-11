const { Upload } = require("../cloudinaryConfig");

module.exports.UploadImg = async (req, res) => {
  try {
    const result = await Upload(req.body.image);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
