class Wallet {
    constructor(money) {
        let _money = money;

        // hides the cash aont in the wallet
        this.getWalletValue = () => _money;

        // cheks if the amount in the walllet is sufficient for the declared bid
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        };

        // changes the cash in the wallet
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowe działanie")
                }
            } else {
                throw new Error("nieprawidłowa liczba")
            }
        }
    }
}