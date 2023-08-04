const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema(

    {
        name:  { type: String, required: true },
        platforms:  [{ type: String, required: true }],
        price:  { type: String, required: true },
        year:  { type: String, required: true },
        genre:  { type: String, required: true },
        description:  { type: String, required: true },
        images:  [{ type: String }],
    },
    
    {
        timestamps: true
    }

);

const gamesModel = mongoose.model('Games', gameSchema);

module.exports = gamesModel;