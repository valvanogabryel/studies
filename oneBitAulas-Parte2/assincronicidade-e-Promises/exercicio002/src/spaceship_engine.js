export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }

    turnOn() {
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.checkShield()

        Promise.all([currentChargeChecking, shieldChecking])
            .then(results => this.normalizeShield(results[1]))
            .then(newShield => {
                this.spaceship.shield = newShield
                console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
            })
            .catch(errors => console.log(`(${this.spaceship.name}) Partida não autorizada: ${errors}`))
    }

    checkCurrentCharge() {
        return new Promise((resolve, reject) => {
            let currentCharge = Math.round(this.spaceship.currentPercentage())
            if (currentCharge < 30) {
                reject(`Carga muito baixa!`)
            } else {
                resolve(currentCharge)
            }
        })
    }

    checkShield() {
        return new Promise((resolve, reject) => {
            let doubleShield = this.spaceship.shield * 2;
            if (doubleShield < 100) {
                reject(`Escudo muito baixo!`)
            } else {
                resolve(doubleShield)
            }
        })
    }

    normalizeShield(doubleShield) {
        return new Promise((resolve, reject) => {
            let normalizedShieldValue = doubleShield * 0.7
            if (normalizedShieldValue > 120) {
                reject(`Escudo sobrecarregado!`)
            } else {
                resolve(normalizedShieldValue)
            }
        })
    }
}