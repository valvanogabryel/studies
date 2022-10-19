class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false
        this.entranceDoorsOpen = false;
    }
    hitch() {
        this.isHitched = true;
        this.entranceDoorsOpen = true;
    }
};

function registerSpaceship() {
    let spaceshipName = prompt('Digite o nome da nave: ');
    let spaceshipCrewQuantity = prompt('Informe o número de tripulantes: ');
    let spaceship = new Spaceship(spaceshipName, spaceshipCrewQuantity);
    return spaceship;
}

function printSpaceships(spaceships) {
    let spaceshipList = "";
    spaceships.forEach((spaceship, index) => {
        spaceshipList += `${(index + 1)}- Nave: ${spaceship.name} (${spaceship.crewQuantity} tripulantes).\n`
    });
    alert(spaceshipList);
}

let hitchedSpaceships = [];

function showMenu() {
    let chosenOption;
    do {
        chosenOption = parseInt(prompt('O que deseja fazer?\n1- Realizar engate\n2- Imprimir naves na tela\n3- Encerrar programa.'))
        switch (chosenOption) {
            case 1:
                let spaceshipToAdd = registerSpaceship()
                spaceshipToAdd.hitch()
                hitchedSpaceships.push(spaceshipToAdd)
                break
            case 2:
                printSpaceships(hitchedSpaceships);
                break
            case 3:
                alert('Encerrando programa...')
                break
        }
    } while (chosenOption !== 3)
}

showMenu()