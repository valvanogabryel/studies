class Spaceship {
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


function createSpaceship() {
    let spaceshipName = prompt('Digite o nome da nave: ')
    let crewQuantity = prompt('Informe a quantidade de tripulantes: ')
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printShips(spaceships) {
    let spaceshipList = '';
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + "tripulantes\n"
    })
    alert(spaceshipList)
}

function showMenu() {
    let chosenOption;
    do {
        chosenOption = parseInt(prompt('Deseja:\n1- Realizar engate\n2- Imprimir naves na tela\n3- Sair do programa'));
        switch (chosenOption) {
            case 1:
                let spaceshipToAdd = createSpaceship()
                spaceshipToAdd.hitch()
                hitchedSpaceships.push(spaceshipToAdd)
                break
            case 2:
                printShips(hitchedSpaceships)
                break
            case 3:
                endProgram()
                break
            default:
                alert('Valor inválido')
        }
    } while (chosenOption != 3)
}

let hitchedSpaceships = []

showMenu()