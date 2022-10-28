class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.enrollSpaceship()
        let chosenOption;
        do {
            chosenOption = this.showMenu();
            this.choosedOption(chosenOption)
        } while (chosenOption != '3');
        this.printAndExit();
    }

    enrollSpaceship() {
        let spaceshipName = prompt('Digite o nome da nave: ');
        let spaceshipCrew = prompt('Informe o número de tripulantes: ');
        let spaceshipType = this.askForType();
        if (spaceshipType == '1') {
            let weaponsQuantity = prompt('Quantas armas a nave possui? ');
            this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrew, weaponsQuantity);
        } else {
            let seatsQuantity = prompt('Quantos assentos a nave possui? ')
            this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrew, seatsQuantity);
        }
    }

    askForType() {
        let chosenOption;
        while (!['1', '2'].includes(chosenOption)) {
            chosenOption = prompt('Qual o tipo da nave:\n1- Batalha\n2- Transporte');
        }
        return chosenOption
    }

    showMenu() {
        const message = 'O que deseja fazer?\n1- Acelerar a nave\n2- Trocar a nave\n3- Imprimir e sair';
        let chosenOption = prompt(message);
        while (!['1', '2', '3'].includes(chosenOption)) {
            chosenOption = prompt(message);
        }
        return chosenOption
    }

    choosedOption(chosenOption) {
        switch (chosenOption) {
            case '1':
                this.accelerateSpaceship();
                break
            case '2':
                this.enrollSpaceship();
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = parseInt(prompt('O quanto deseja acelerar?'));
        this.spaceship.speedUp(acceleration);
    }

    printAndExit() {
        const finalMessage = `Name: ${this.spaceship.name}\nNúmero de tripulantes: ${this.spaceship.crewQuantity}\nVelocidade atual: ${this.spaceship.currentVelocity}Km/s`;
        alert(finalMessage);
    }
}