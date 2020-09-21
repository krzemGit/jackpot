// keeps the track of games and displays them in the interface

class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        };
        this.gameResults.push(gameResult)
    };
    showGameStatistics() {
        let gamesNum = this.gameResults.length;
        let winsNum = this.gameResults.filter(result => result.win).length
        let lossesNum = this.gameResults.filter(result => !result.win).length
        return [gamesNum, winsNum, lossesNum]
    };
}

const stats = new Statistics()