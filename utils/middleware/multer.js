const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = file.mimetype.split('/')[1];
    cb(null, uniqueSuffix + '.' + fileExtension);
  }
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no permitido'));
    }
  }
});

module.exports = upload;