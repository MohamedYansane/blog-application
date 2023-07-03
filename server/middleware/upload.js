import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,path.join(__dirname,"../uploads"));
    },
    filename:(req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
export const upload = multer({
    storage: storage,
    fileSize:{
        limits:1 * 1000000 //MB
    },
    fileFilter:(req,file,cb) =>{
        let ext = path.extname(file.originalname);
        if(ext !== ".png" || ext !== ".jpg" || ext !== ".jpeg")
        {
            cb(new Error("Only PNG , JPG  and JPEG files are allowed"));
        }
        cb(null,true);
    }
    
});
