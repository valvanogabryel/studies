export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }

    turnOn() {
        this.checkCurrentPercentage().then(currentCharge =>
            console.log(`(${this.spaceship.name}) Partida autorizada: carga atual em ${currentCharge}%`)).catch(currentCharge =>
                console.log(`(${this.spaceship.name}) Partida NÃO autorizada: carga em ${currentCharge}%`))
    }

    checkCurrentPercentage() {
        return new Promise((resolve, reject) => {
            let currentCharge = Math.round(this.spaceship.currentPercentage());
            if (currentCharge >= 30) {
                resolve(currentCharge)
            } else {
                reject(currentCharge)
            }
        })
    }
}