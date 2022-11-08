const spaceship = {
    name: 'Rontaro',
    currentBatteryCharge: 50,
    consumptionPerKm: 0.00008
};

const updateBatteryCharge = function (chargeConsumed) {
    return new Promise((resolve, reject) => {
        spaceship.currentBatteryCharge -= chargeConsumed;
        if (spaceship.currentBatteryCharge > 0) {
            resolve(spaceship.currentBatteryCharge)
        } else {
            reject('Nave sem bateria. Desligando em poucos segundos...')
        }
    })
};

const calculateBatteryConsumption = function (velocity, seconds) {
    return new Promise((resolve, reject) => {
        if (velocity <= 0 || spaceship.consumptionPerKm <= 0) {
            reject('A nave está parada...')
        } else {
            let chargeConsumed = spaceship.consumptionPerKm * velocity * seconds
            resolve(chargeConsumed)
        }
    })
};


calculateBatteryConsumption(90, 300)
    .then(chargeConsumed => {
        return updateBatteryCharge(chargeConsumed)
    })
    .then(newCharge => {
        console.log(`Carga atual: ${newCharge}`)
    })
    .catch(error => {
        console.log(error)
    })  
