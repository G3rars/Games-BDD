class Game {
    name
    platforms
    price
    year
    genre
    description
    stock
    images
    constructor({name, platforms, price, year, genre, description, stock, images = []}){
        this.name = name
        this.platforms = platforms
        this.price = price
        this.year = year
        this.genre = genre
        this.description = description
        this.stock = stock
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
            stock: this.stock,
            images: this.images
        }
    }
}

module.exports = Game