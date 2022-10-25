class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship()
    }

    enrollSpaceship() {
        let spaceshipName = prompt('Digite o nome da nave: ')
        let spaceshipCrew = prompt('Informe o número de tripulantes: ')
        let spaceshipType = askForType()
        if (spaceshipType == '1') {
            let spaceshipWeapons = prompt('Informe o número de armas: ');
            this.spaceship = new Spaceship(spaceshipName, spaceshipCrew, spaceshipWeapons)
        } else {
            let spaceshipSeats = prompt('Informe o número de assentos: ')
            this.spaceship = new Spaceship(spaceshipName, spaceshipCrew, spaceshipSeats)
        }
    }

    askForType() {
        let chosenOption;
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt('Qual é o tipo da nave?\n1- Batalha\n2- Transporte')
        }
        return chosenOption;
    }






}