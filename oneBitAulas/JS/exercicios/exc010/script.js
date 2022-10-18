let spaceship = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration
    }
};

function registerSpaceship() {
    spaceship.name = prompt('Digite o nome da nave: ');
    spaceship.type = prompt('Informe o tipo da nave: ');
    spaceship.maxVelocity = parseInt(prompt('Qual é a velocidade máxima da nave? (Km/s)'));
}

function accelerate() {
    let acceleration = parseInt(prompt('O quanto desejas acelerar?'));
    spaceship.speedUp(acceleration)
    if (spaceship.velocity >= spaceship.maxVelocity) {
        alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!!!\n\nVelocidade atual: ${spaceship.velocity}\nVelocidade máxima: ${spaceship.maxVelocity}`)
    }
};

function stop() {
    let confirmation = confirm('Desejas parar?')
    confirmation === true ? alert(`Nave: ${spaceship.name}\nTipo: ${spaceship.type}\nVelocidade: ${spaceship.velocity}\n Velocidade máxima: ${spaceship.maxVelocity}`) : showMenu()
};

function showMenu() {
    let chosenOption;
    do {
        chosenOption = Number(prompt('O que desejas fazer?\n1- Acelerar\n2- Parar'))
        switch (chosenOption) {
            case 1:
                accelerate()
                break
            case 2:
                stop()
                break
            default:
                alert('Opção inválida.')
        }
    } while (chosenOption != 2)
};

registerSpaceship();

showMenu();

