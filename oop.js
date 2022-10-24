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


// ----------------------------------------------------------------------- //

class TransportSpaceship {
    constructor(name) {
        this.name = name;
        this.currentVelocity = 0;
    }
    set velocity(newVecocity) {
        if (newVecocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVecocity;
        }
    }
}

const transporter = new TransportSpaceship('Transportadora')

console.log(transporter);

transporter.velocity = 800;

console.log(transporter);
