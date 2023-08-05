

class Cart {
    games
    constructor(games = []){
        this.games = games
    }

    DTO() { 
        return {
            games: this.games
        }
        
    }
}

module.exports = Cart