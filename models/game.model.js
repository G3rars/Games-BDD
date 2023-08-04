class Game {
    name
    platforms
    price
    year
    genre
    description
    images
    constructor({name, platforms, price, year, genre, description, images = []}){
        this.name = name
        this.platforms = platforms
        this.price = price
        this.year = year
        this.genre = genre
        this.description = description
        this.images = images

    }

    DTO () {
        return {
            name: this.name,
            platforms: this.platforms,
            price: this.price,
            year: this.year,
            genre: this.genre,
            description: this.description,
            images: this.images
        }
    }
}

module.exports = Game