  const multer = require('multer');
  
  const storage = multer.memoryStorage();

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