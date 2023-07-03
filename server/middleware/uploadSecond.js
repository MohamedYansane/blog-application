import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  dest: path.join(__dirname, "../uploads"),
  file: (req, file, callback) => {
    callback(null, `${Date.now}-${file.originalFilename}`);
  },
});
const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1000000, // au minimum le size du file doit etre superieure à 1mb
  },
  fileFilter: (req, file, cb) => {
    let extension = path.extname(file);
    if (extension !== "png" && extension !== "jpeg" && extension !== "jpg") {
      return cb(new Error("Only images are allowed"));
    }
  },
});
export default { storage, uploadPicture };
