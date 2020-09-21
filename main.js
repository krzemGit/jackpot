// main file for game start, value in parntheses is an amount of money in the game
welcomeInterface.welcomeInit()

document.getElementById('play').addEventListener('click', function (e) {
    e.preventDefault();
    const game = new Game(welcome.wallet);
    welcomeInterface.unBlur();
    welcomeInterface.hide()
})


