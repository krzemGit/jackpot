class Game {
    constructor(start) {
        this.firstSpin = true; // this value should be equal to transition duration in CSS (--animation-length variable)
        this.delay = this.firstSpin ? 0 : 1000;
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        // HTML elements
        this.startBtn = document.getElementById('start');
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.pResult = document.getElementById('result')
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResults = document.querySelectorAll('.score span'); // [result, games, wins, losses]

        // events
        this.startBtn.addEventListener('click', () => this.startGame());

        // function called for the first display
        this.render();
    }

    render(money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        // change to English if necessary
        if (lang.english && this.firstSpin) {
            lang.gameTitleTag.innerText = lang.gameTitle
            lang.cashInfoTag.innerText = lang.cashInfo;
            lang.scoreStatsTag.innerHTML = lang.scoreStats;
            lang.bidInputTag.placeholder = lang.startForm[0];
            this.startBtn.innerHTML = lang.startForm[1];
            this.spanResults = document.querySelectorAll('.score span');
        }

        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}$`;
            this.pResult.style.color = "green";
        } else if (!result && result !== '') {
            result = `Przegrałeś ${bid}$`;
            this.pResult.style.color = "#f12711";
        }
        this.pResult.textContent = result;
        this.pResult.classList.remove('hidden')
        this.spanResults[1].textContent = stats[0];
        this.spanResults[2].textContent = stats[1];
        this.spanResults[3].textContent = stats[2];

        this.inputBid.value = '';
    }

    startGame() {
        //check the bid amount and cash in wallet
        if (this.inputBid.value < 1) return alert("Zbyt mała kwota");

        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert("masz za mało środków lub podałeś nieprawidłową wartość")
        };

        // run game
        visuals.disableBtn(this.startBtn, true);
        this.firstSpin = false;
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        visuals.resetSpin();
        this.pResult.classList.add('hidden')

        // delay for animations 
        setTimeout(() => {
            visuals.populateSlots(colors);
            visuals.spinAll();
        }, this.delay)

        // checking results and printing to the interface
        setTimeout(() => {
            const win = Result.checkWinner(colors);
            const wonMoney = Result.moneyWon(win, bid);
            this.wallet.changeWallet(wonMoney);
            this.stats.addGameToStatistics(win, bid);
            const updatedWallet = this.wallet.getWalletValue();
            const updatedStats = this.stats.showGameStatistics();
            this.startBtn.disabled = false;
            visuals.disableBtn(this.startBtn, false);

            this.render(updatedWallet, win, updatedStats, bid, wonMoney);

            // scroll for mobile screens, to see the result
            if (window.innerWidth <= 500) {
                document.querySelector('footer').scrollIntoView({ behavior: 'smooth', block: 'end' })
            }
        }, this.delay + 7500) // delay for animations 
    }
}


