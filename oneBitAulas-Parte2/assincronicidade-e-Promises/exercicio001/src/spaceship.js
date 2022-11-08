class Spaceship {
    constructor(name, maxCapacity, currentCharge) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
    }

    currentPercentage() {
        return this.currentCharge * 100 / this.maxCapacity;
    }
}

export default Spaceship