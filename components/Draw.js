// draws the results, core object of the game

class Draw {
    constructor() {
        this.options = [0, 1, 2];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let symbols = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const symbol = this.options[index];
            symbols.push(symbol);
        }
        return symbols
    };
}



const draw = new Draw();