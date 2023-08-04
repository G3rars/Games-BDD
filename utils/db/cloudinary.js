const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({ 
  cloud_name: 'dgesuhk6r', 
  api_key: '934675915129934', 
  api_secret: '5WD7gCpkUE4tbEWBl5Gd7dy8_ao'
});

module.exports = cloudinary


/*cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});
*/