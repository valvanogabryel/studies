//Plataforma = indice da nave do subarray + 1.

const hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
];

const filter9Crew = hitchedSpaceships.filter(spaceship => spaceship[1] > 9).map(spaceship => spaceship[0]).join(' e ')
console.log(filter9Crew);

let firstPendentHitch = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
});

console.log(firstPendentHitch)

const firstPlataformPendent = firstPendentHitch += 1;

const spaceshipsNames = hitchedSpaceships.map(function (spaceships) {
    return spaceships[0]
})

let upcasedSpaceships = spaceshipsNames.map(function (spaceships) {
    const upcased = spaceships.toUpperCase()
    return upcased
}).join(', ')
console.log(upcasedSpaceships)


alert(`As naves que tem mais de nove tripulantes são: ${filter9Crew}.\nA primeira plataforma que está com engate pendente é a ${firstPlataformPendent}.\nAs naves são: ${upcasedSpaceships}`)



