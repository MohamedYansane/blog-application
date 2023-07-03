import multer from "multer";
import path from "path";
// path is a module of node js we dont need to install the package
/**
 *  @type {*}
 * for the error we pass null and destination we use absolute __dirname
 * and join this path with my current directory
 * so i'll create a folder uploads as i specifed below
 * cb means callback Date.now return a milliseconde
 */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

/**
 *  @type {*}
 * in storage we specifile where our files will be saved
 * user cant upload files with 1 mb  fileSize:1 * 1000000
 */
export const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1000000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ext && ".jpg" && ext !== ".jpeg") {
      return cb(new Error("Only images are allowed"));
    }
    // if everything is ok  error null and ext true
    cb(null, true);
  },
});
