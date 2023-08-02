const multer = require("multer");
const path = require("path");
const createError = require("../errors/create-error");

const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']

const fileFilter = (req, file, cb) => {
    if(!VALID_FILE_TYPES.includes(file.mimetype)) {
        cb(createError("Extension de imagen no permitido, solo se permite: png, jpg, jpeg, webp"));

    }else {
        cb(null, true)
    }
}
 

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/uploads'))

    }
});

const upload = multer({
    storage,
    fileFilter
});


module.exports = upload;