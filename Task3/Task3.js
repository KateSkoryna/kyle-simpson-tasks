function randMax(max) {
    //The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
    return Math.trunc(1E9 * Math.random()) % max;
}

const reel = {
    symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        this.position = (
            this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position === null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    }
}

const slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },
    display() {
        let lines = [];
        //display all three lines on the slot machine
        for (let linePos = -1; linePos <= 1; linePos++) {
            let line = this.reels.map(reel => {
                const slot = Object.create(reel);
                slot.position = (
                    reel.symbols.length + reel.position + linePos) % reel.symbols.length;
                return reel.display.call(slot);
            }
            );
            lines.push(line.join(" | "));
        }
        return lines.join("\n");
        }
}
    
slotMachine.spin()
console.log(slotMachine.display())

slotMachine.spin()
console.log(slotMachine.display())