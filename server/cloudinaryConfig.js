const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

module.exports.Upload = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (err, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      return reject({ message: err.message });
    });
  });
};
