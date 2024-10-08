// middlewares/multerS3.js

const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("./config/s3");

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read", // Pozwolenie na odczyt publiczny
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "_" + file.originalname); // Unikalna nazwa pliku
    },
  }),
});

module.exports = upload;
