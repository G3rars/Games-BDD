const cloudinary = require('cloudinary').v2;
const fs = require('fs');

class ImageService {

    async saveImage (files) {
        try {
            const imagePaths = await files.map((image) => image.path); 
            const uploadPromises = await imagePaths.map((value) => cloudinary.uploader.upload(value));
            const images = await Promise.all(uploadPromises);
            await imagePaths.forEach((path) => {
                fs.unlinkSync(path);
              });
            return images.map(value => value.secure_url)

        } catch (error) {

            throw new Error("error al procesar imagen")
            
        }
    
    }
}

const imageService = new ImageService()

module.exports = { imageService }