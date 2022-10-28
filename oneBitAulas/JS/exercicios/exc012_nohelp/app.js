class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship()
        let chosenOption;
        do {
            chosenOption = this.showMenu()
            this.menuOptions(chosenOption)
        } while (chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt('Digite o nome da nave: ')
        let spaceshipCrew = prompt('Informe o número de tripulantes: ')
        let spaceshipType = this.askForType()
        if (spaceshipType == '1') {
            let spaceshipWeapons = prompt('Informe o número de armas: ');
            this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrew, spaceshipWeapons)
        } else {
            let spaceshipSeats = prompt('Informe o número de assentos: ')
            this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrew, spaceshipSeats)
        }
    }

    askForType() {
        let chosenOption;
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt('Qual é o tipo da nave?\n1- Batalha\n2- Transporte')
        }
        return chosenOption;
    }

    showMenu() {
        const message = "O que deseja fazer?\n1- Acelerar a nave\n2- Trocar a nave\n3- Imprimir dados da nave e encerrar programa"
        let chosenOption = prompt(message);
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(message);
        }
        return chosenOption;
    }

    menuOptions(chosenOption) {
        switch (chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = parseInt(prompt('O quanto desejas acelerar?'))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        const finalMessage = `Nave: ${this.spaceship.name}\nQuantidade de tripulantes: ${this.spaceship.crewQuantity}\nVelocidade atual: ${this.spaceship.currentVelocity}`
        alert(finalMessage)
    }


}