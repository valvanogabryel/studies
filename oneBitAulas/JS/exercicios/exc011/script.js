class Spaceships {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false;
        this.entranceDoorsOpen = false;
    }
    hitch() {
        this.isHitched = true;
        this.entranceDoorsOpen = true
    }
}

let hitchedSpaceships = []

function createSpaceship() {
    let spaceshipName = prompt('Digite o nome da nave: ')
    let spaceshipCrew = prompt('Informa a quantidade de tripulantes na nave: ')
    let spaceship = new Spaceships(spaceshipName, spaceshipCrew)
    return spaceship
}

function printShips(spaceships) {
    let spaceshipList = ''
    spaceships.forEach((spaceship, index) => {
        spaceshipList += `${(index + 1)} - Nave: ${spaceship.name}\nTripulantes: ${spaceship.crewQuantity}\n`
    })
    alert(spaceshipList);
}

function showMenu() {
    let chosenOption;
    do {
        chosenOption = parseInt(prompt('Deseja:\n\n1- Realizar engate\n2- Imprimir naves na tela\n 3- Encerrar o programa'))
        switch (chosenOption) {
            case 1:
                let spaceshipToAdd = createSpaceship()
                spaceshipToAdd.hitch()
                hitchedSpaceships.push(spaceshipToAdd)
                break
            case 2:
                printShips(hitchedSpaceships)
                break

            default:
                alert('Valor inválido');
        }
    } while (chosenOption != 3)
}

showMenu()