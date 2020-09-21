class Language {
    constructor() {
        this.english = 0;
        this.gameTitle = 'jackpot'
        this.changeBtn = ['Eng', 'PL'];
        this.inst = [`<h2>Witaj w grze "Jednoręki Bandyta"</h1>
        <p>Gra polega na losowaniu obrazków. Jeśli wylosujesz trzy takie same lub trzy różne obrazki - wygrywasz.</p>
        <p> Zwycięzca otrzymuje dwukrotną wartość tego zakładu, przegrany traci zakład. Możesz grać dopóki nie stracisz wszystkich pieniędzy z portfela</p>
        <p> Wybierz ilość pieniędzy w portfelu: </p>`,
            `<h2>Welcome to "Jackpot"</h1>
        <p>The game is based on drawing symbols: if a player draws 3 similar or 3 different symbols, he/she wins.</p>
        <p>The winner takes the double of the amout he bid, otherwise the bid is lost. Player can continue as long as he has money in his/her wallet </p>
        <p>Choose the amount of money in your wallet:</p>
        ` ];
        this.startBtn = ['Rozpocznij Grę', 'Start Game'];
        this.startForm = ['Set your bid', 'Spin']
        this.currency = [' PLN', ' $'];
        this.cashInfo = 'YOUR CURRENT WALLET IS:';
        this.scoreStats = '<span class="result"></span> You have played <span class="number"></span> games, including <span class="win"></span> wins and <span class="loss"></span> losses.';

        //HTML elements
        this.gameTitleTag = document.querySelector('h1');
        this.cashInfoTag = document.querySelector('#cashInfo');
        this.scoreStatsTag = document.querySelector('.score');
        this.bidInputTag = document.querySelector('input#bid');
    }
    changeLang() {
        this.english = +(!this.english)
    }
}

const lang = new Language;