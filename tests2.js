const spaceship = {
    name: 'Fenix',
    crewQuantity: 7,
    type: 'Batalha',
    isHitched: [true, false]
}

spaceship.shieldLevel = 100

linha()

spaceship.isHitched[0] ? console.log(`O nome da espaçonave é ${spaceship.name}. Ela tem, no momento, ${spaceship.crewQuantity} tripulantes. Ela é do tipo ${spaceship.type}. E ela está engatada à plataforma.`) : console.log(`O nome da espaçonave é ${spaceship.name}. Ela tem, no momento, ${spaceship.crewQuantity} tripulantes. Ela é do tipo ${spaceship.type}. E ela NÃO está engatada à plataforma.`);

linha()

console.log(spaceship)

linha()

function linha() {
    console.log('-------------------------------------------------')
}


