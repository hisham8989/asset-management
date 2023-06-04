import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const temp = "./tmp";
    if (!fs.existsSync(temp)) fs.mkdirSync(temp);
    cb(null, temp);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
