class Spaceships {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.isHitched = false;
        this.entranceDoorsOpen = false;
    } hitch() {
        this.isHitched = true;
        this.entranceDoorsOpen = true
    }
}

function createSpaceship() {
    let spaceshipName = prompt('Digite o nome da nave: ')
    let spaceshipCrew = prompt('Informa a quantidade de tripulantes na nave: ')
    let spaceship = new Spaceships(spaceshipName, spaceshipCrew)
    return spaceship
}



function showMenu() {
    let chosenOption;
    do {
        chosenOption = parseInt(prompt('Deseja:\n\n1- Realizar engate\n2- Imprimir naves na tela\n 3- Encerrar o programa'))
        switch (chosenOption) {
            case 1:
                let spaceshipToAdd = createSpaceship()


                break
            case 2:

                break

            default:
                alert('Valor inválido');
        }




    } while (chosenOption != 3)

}