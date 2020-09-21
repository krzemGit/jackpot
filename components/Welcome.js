// Panel with instruction and wallet settings

class Welcome {
    constructor() {
        // wallet value for the game
        this.wallet = 200;
    }
    changeWallet(btnId) {
        switch (btnId) {
            case 'minus100':
                this.wallet -= 100;
                break
            case 'minus10':
                this.wallet -= 10;
                break
            case 'minus1':
                this.wallet -= 1;
                break
            case 'plus1':
                this.wallet += 1;
                break
            case 'plus10':
                this.wallet += 10;
                break
            case 'plus100':
                this.wallet += 100;
                break
            default:
                this.wallet = null;
        }
    }
}

class WelcomeInterface {
    constructor() {
        // instructions for players
        this.langBtn = document.querySelector('button#lang')
        this.instructions = document.querySelector('p.instructions');
        this.modal = document.querySelector('section.welcome');
        this.walletBtns = document.querySelectorAll('button.walletBtn');
        this.walletValue = document.querySelector('span#walletValue');
        this.currency = document.querySelector('span#currency')
        this.playBtn = document.getElementById('play');
        this.gameScreen = document.querySelector('.wrap')
    }
    changeWalletBtn() {
        this.walletBtns.forEach(btn => {
            btn.addEventListener('click', () => { welcome.changeWallet(btn.id), this.renderWelcome() });
        })
    }
    changeLang() {
        this.langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            lang.changeLang();
            this.renderWelcome();
        })
    }
    renderWelcome() {
        this.langBtn.innerText = lang.changeBtn[lang.english];
        this.instructions.innerHTML = lang.inst[lang.english];
        this.walletValue.innerText = welcome.wallet;
        this.currency.innerText = lang.currency[lang.english];
        this.playBtn.innerText = lang.startBtn[lang.english];
    }
    hide() {
        this.modal.style.opacity = 0;
        setTimeout(() => this.modal.style.display = 'none', 1000)
    }
    unBlur() {
        this.gameScreen.classList.remove('is-blurred')
    }
    welcomeInit() {
        this.renderWelcome();
        this.changeWalletBtn();
        this.changeLang();
    }
}

const welcome = new Welcome()
const welcomeInterface = new WelcomeInterface()