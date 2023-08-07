const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier'); // Requiere la librería para convertir el Buffer en stream

class ImageService {
    async saveImage(files) {
        try {
            const uploadPromises = files.map((image) => {
                return new Promise((resolve, reject) => {
                    const upload_stream = cloudinary.uploader.upload_stream(
                        {
                            folder: 'game-store' // Cambia esto a la carpeta deseada en Cloudinary
                        },
                        (error, result) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    );

                    // Convertir el Buffer en stream y enviarlo a Cloudinary
                    streamifier.createReadStream(image.buffer).pipe(upload_stream);
                });
            });

            const uploadedImages = await Promise.all(uploadPromises);

            return uploadedImages.map(image => image.secure_url);
        } catch (error) {
            console.error("Error during image upload:", error);
            throw error;
        }
    }
}

const imageService = new ImageService()

module.exports = { imageService };




