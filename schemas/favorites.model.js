const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema(

    {
        name:  { type: String, required: true },
        platforms:  [{ type: String, required: true }],
        price:  { type: Number, required: true },
        year:  { type: Number, required: true },
        genre:  { type: String, required: true },
        description:  { type: String, required: true },
        cover: { type: String},
        imageDetails1: { type: String},
        imageDetails2: { type: String},
        imageDetails3: { type: String},

    },
    
    {
        timestamps: true
    }

);

const favoritesModel = mongoose.model('Favorite', favoritesSchema);

module.exports = favoritesModel;