// object responsible for the visulas in the game (animations etc.)

class Visuals {
    constructor() {
        // draw symbols, from font-awsome
        this.symbols = ['<div class="symbol-wrapper"><i class="fas fa-bomb"></i></div>',
            '<div class="symbol-wrapper"><i class="fas fa-feather"></i></div>',
            '<div class="symbol-wrapper"><i class="fas fa-bell"></i></div>'
        ];

        // slots for displaying spin results
        this.slots = document.querySelectorAll('div.color')

        // varibles required for the spin mechanics
        this.scrollSpeed = 1;
        this.scrollValue = Array(this.slots.length).fill(1);
        this.iterations = Array(this.slots.length).fill(0);
    }

    // button disabled during the spin, not sure if to put it here, but couldn't have found a better place
    disableBtn(btn, disable) {
        if (disable === true) {
            btn.disabled = true;
            btn.classList.add('disabled');
        } else {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    }

    // populates slots with symbols in a new order
    populateSlots(drawList) {   // required list of three elements from Draw object
        this.slots.forEach((slot, index) => {
            let elements = [...slot.querySelectorAll('div.symbol')]
            let drawnSymbol = drawList[index]
            for (let i = 0; i < elements.length; i++) {
                if (i % 3 == 1) {
                    elements[i].innerHTML = drawnSymbol > 1 ? this.symbols[0] : this.symbols[drawnSymbol + 1]
                } else if (i % 3 == 2) {
                    elements[i].innerHTML = drawnSymbol > 0 ? this.symbols[drawList[index] - 1] : this.symbols[2]
                } else {
                    elements[i].innerHTML = this.symbols[drawList[index]]
                }
            }
        })
    }

    // method for spinning one element
    spin(element, index) {
        element.querySelector('.mask').classList.add('transparent')
        this.iterations[index]++;
        if (this.iterations[index] < 322) {
            this.scrollValue[index] -= 10;
        } else if (this.iterations[index] < 450) {
            this.scrollValue[index] -= 5;
        } else if (this.iterations[index] < 500) {
            this.scrollValue[index] -= 3;
        } else if (this.iterations[index] < 600) {
            this.scrollValue[index] -= 2;
        } else if (this.iterations[index] < 700) {
            this.scrollValue[index] -= 1;
        } else if (this.iterations[index] < 802) {
            this.scrollValue[index] -= 0.5;
        } else if (this.iterations[index] < 1052) {
            this.scrollValue[index] -= 0.2;
        } else {
            return;
        }
        element.querySelectorAll('div.symbol').forEach(node => node.style.top = `${this.scrollValue[index]}px`);
        setTimeout(() => this.spin(element, index), this.scrollSpeed)
    }

    // application of the spin() method to all display slots
    spinAll() {
        this.slots.forEach((element, elementIndex) => { setTimeout(() => this.spin(element, elementIndex), (elementIndex * 500)) })
    }

    // reseting / masking slots before the next spin
    resetSpin() {
        this.slots.forEach(element => element.childNodes[1].classList.remove('transparent'))
        for (let i = 0; i < this.slots.length; i++) {
            this.iterations[i] = 0;
            this.scrollValue[i] = 0;
        }
    }
}

const visuals = new Visuals()