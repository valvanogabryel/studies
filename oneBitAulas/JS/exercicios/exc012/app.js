class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship()
        let chosenOption;
        do {
            chosenOption = this.showMenu()
            this.choosedOption(chosenOption);
        } while (chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt('Digite o nome da nave: ');
        let spaceshipCrew = prompt('Informe o número de tripulantes: ');
        let spaceshipType = this.askSpaceshipType();
        if (spaceshipType == "1") {
            let spaceshipWeapons = prompt('Quantas armas a nave possui?')
            this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrew, spaceshipWeapons)
        } else {
            let spaceshipSeats = prompt('Quantos assentos a nave possui?')
            this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrew, spaceshipSeats)
        }
    }

    askSpaceshipType() {
        let chosenOption;
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt('Informe o tipo de nave:\n1- Batalha\n2- Transporte');
        }
        return chosenOption
    }

    showMenu() {
        const message = "O que deseja fazer?\n1- Acelerar a Nave\n2- Trocar a Nave\n3- Imprimir e sair"
        let chosenOption = prompt(message)
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(message)
        }
        return chosenOption
    }

    choosedOption(chosenOption) {
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
        let acceleration = parseInt(prompt('O quanto desejas acelerar?'));
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        const finalMessage = `Nave: ${this.spaceship.name}\nQuantidade de tripulantes: ${this.spaceship.crewQuantity}\nVelocidade atual: ${this.spaceship.currentVelocity}`
        alert(finalMessage);
    }


}

