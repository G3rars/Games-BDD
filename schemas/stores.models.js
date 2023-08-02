const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema(

    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        games: [{ type: mongoose.Types.ObjectId, ref: 'Games'}],

    },

    {
        timestamps: true
    }

);

const storesModel = mongoose.model('Stores', storesSchema);

module.exports = storesModel;