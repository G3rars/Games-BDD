const mongoose = require('mongoose');
require('dotenv').config();

const dataBase = "mongodb+srv://root:WwsEmhjtMxumx9rI@cluster0.zrgspwy.mongodb.net/?retryWrites=true&w=majority"

const connect = () => {

    mongoose.connect(dataBase, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    });

};

module.exports = connect