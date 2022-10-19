/* const fruits = ['Apple', 'Banana', 'Kiwi', 'Orange'];

for (i of fruits) {
    console.log(i)
}
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i == 5) {
        break
    }
}

for (let c = 0; c <= 10; c++) {
    if (c == 5) {
        continue
    }
    console.log(c)
} 
*/

/*class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentVelocity = 0;
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration;
        if (this.currentVelocity >= this.maxRecommendedVelocity) {
            console.log('VELOCIDADE MÁXIMA ULTRAPASSADA!!!')
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0;
        console.log('Recolhendo armas e parando a espaçonave.')
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0;
        console.log('Recolhendo equipamento de amostras e parando a espaçonave.')
    }
}

let darwin = new DiscoverySpaceship('Darwin', 10, 200);
let fenix = new BattleSpaceship('Fenix', 8, 240);

darwin.speedUp(250);
console.log(darwin);
fenix.speedUp(230);
console.log(fenix);

darwin.stop();

fenix.stop();

class TransportSpaceship extends Spaceship {
    speedUp() {
        console.log('Naves de tranporte só aumentam a velocidade em 1km/s')
        this.currentVelocity++
    }
}

let tranportSpaceship = new TransportSpaceship('Transportadora', 4, 100);


console.log(tranportSpaceship)*/


class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentVelocity = 0;
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration;
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            console.log('VELOCIDADE MÁXIMA ULTRAPASSADA!!!')
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
        super(name, maxCrew, maxRecommendedVelocity, maxLoadWeight)
        this.maxLoadWeight = maxLoadWeight;
    }
    speedUp(acceleration) {
        acceleration /= 2
        console.log(`Incrementando velocidade em ${acceleration} km/s`)
        super.speedUp(acceleration)
    }
}

let tranportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400);

tranportSpaceship.speedUp(210)

console.log(tranportSpaceship)
