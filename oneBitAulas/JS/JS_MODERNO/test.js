//Desestruturação


let spaceship = {
    name: 'Colossus',
    crew: 10,
    isHitched: false
};

// let spaceshipName = spaceship.name;
// let spaceshipCrew = spaceship.crew;

// console.log(spaceshipName + ', ' + spaceshipCrew)


let { name: spaceshipName, crew } = spaceship;

console.log(spaceshipName + ', ' + crew)


let spaceships =
    [
        'Colossus',
        'Fenix',
        'Puller'
    ];


// let [colossus, fenix, puller] = spaceships


function printShips([colossus, fenix, puller]) {
    console.log(colossus, fenix, puller)

}

printShips(spaceships)


//Operador spread

console.log(spaceships);

console.log(...spaceships);

let newSpaceships = [...spaceships, 'Supernova']

console.log(newSpaceships)


function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10];

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)


// Rest Operator


function greetCrew(message, ...name /* O *OPERADOR REST* DEVE SER SEMPRE O ÚLTIMO PARÂMETRO FORMAL*/) {
    name.forEach((name) => {
        console.log(`${message}, ${name}!`)
    })
}

greetCrew('Seja bem-vindo(a)', 'Arthur', 'Melissa', 'Robert')
