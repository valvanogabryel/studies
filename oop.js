class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name;
        this.platformsQuantity = platformsQuantity;
    }
}

let observatory = new SpacialStation('Observatório', 40)

console.log(observatory)

// ----------------------------------------------------------------------- //

class Spaceship {
    constructor(name, type = 'Batalha') {
        this.name = name;
        this.type = type;
    }
}

const ship1 = new Spaceship('Helmet', 'Descoberta')
const ship2 = new Spaceship('Supernova')

console.log(ship1)
console.log(ship2)


// ----------------------------------------------------------------------- //


class Spaceship2 {
    constructor(name) {
        this.name = name;
        this.velocity = 0;
    } speedUp(acceleration) {
        this.velocity += acceleration
    }
}


const artemis = new Spaceship2('Artemis')

artemis.speedUp(10)

artemis.speedUp(15)

console.log(artemis)


class Captain {
    constructor(name, age, flightHours) {
        this.name = name;
        this.age = age;
        this.flightHours = flightHours
    }
}

class SpacialShip {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.captain = new Captain(captainName, captainAge, captainFlightHours);
    }
}

const ship3 = new SpacialShip('Supernova', 13, 'Phillyps', 30, 13000)

console.log(ship3)
