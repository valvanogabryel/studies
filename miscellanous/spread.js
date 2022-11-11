let spaceships = ['Colossus', 'Ártemis', 'Puller'];

let newSpaceshipsNoSpread = [spaceships, 'Supernova'];

let newSpaceshipsSpread = [...spaceships, 'Supernova'];

console.log(newSpaceshipsNoSpread);  // print => [['Colossus', 'Ártemis, 'Puller'], 'Supernova];
//-----------
console.log(newSpaceshipsSpread); // print => ['Colossus', 'Ártemis, 'Puller', 'Supernova];


function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10];
//------------------> velocity, acceleration
let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity);