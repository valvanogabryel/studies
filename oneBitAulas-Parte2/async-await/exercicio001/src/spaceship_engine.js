export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }

    async turnOn() {
        try {
            let currentChargeChecking = this.checkCurrentCharge();
            let shieldChecking = this.checkShield();
            let promisesResults = await Promise.all([currentChargeChecking, shieldChecking]);
            let newShield = await this.normalizeShield(promisesResults[1]);
            this.spaceship.shield = newShield;
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`);
        } catch (errors) {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${errors}`);
        };
    };

    async checkCurrentCharge() {
        let currentCharge = Math.round(this.spaceship.currentPercentage());
        if (currentCharge < 30) return Promise.reject(`Carga muito baixa!`);
        return currentCharge;
    };

    async checkShield() {
        let doubleShield = this.spaceship.shield * 2;
        if (doubleShield < 100) return Promise.reject(`Escudo muito baixo!`);
        return doubleShield;
    };

    async normalizeShield(doubleShield) {
        let normalizedShieldValue = doubleShield * 0.7;
        if (normalizedShieldValue > 120) return Promise.reject(`Escudo sobrecarregado!`);
        return normalizedShieldValue;
    };
};