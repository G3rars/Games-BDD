const mongoose = require('mongoose');
const gamesModel = require('../../models/games.model.js');
const fs = require('fs');

const dataBase = "mongodb+srv://root:WwsEmhjtMxumx9rI@cluster0.zrgspwy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dataBase, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allGames = await gamesModel.find();

    if (allGames.length) {

        await gamesModel.collection.drop();

    }
}).catch(err => {
    console.log(`Ha habido un error eliminando los datos: ${err}`);
})
.then(async () => {

    const data = fs.readFileSync('./utils/seeds/db/games.json');

    const parseData = JSON.parse(data);
    const gamesDocs = parseData.map((games) => {
        return new gamesModel(games)

    });
    await gamesModel.insertMany(gamesDocs);
})
.catch((err) => {
    console.log(`Ha habido un error ${err} `);
})
.finally(() => mongoose.disconnect);