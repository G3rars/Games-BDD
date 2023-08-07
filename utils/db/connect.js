const mongoose = require('mongoose');
require('dotenv').config();

const dataBase = process.env.DB_URL

const connect = () => {

    mongoose.connect(dataBase, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    });

};

module.exports = connect