let shipName = prompt('Digite o nome da nave: ')
let shipVelocity = 0
let chosenOption

function showMenu() {
    let option
    while (option != '1' && option != '2' && option != '3' && option != '4') {
        option = prompt('Oque deseja fazer?\n' +
            '1- Acelerar a nave em 5Km/s.\n' +
            '2- Desacelerar a nave em 5Km/s.\n' +
            '3- Imprimir dados de bordo.\n' +
            '4- Encerrar programa de bordo.'
        )
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function speedDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printData(name, velocity) {
    alert(`Espaçonave: ${name}\n\nVelocidade: ${velocity}`)
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case '1':
            shipVelocity = speedUp(shipVelocity)
            break
        case '2':
            shipVelocity = speedDown(shipVelocity)
            break
        case '3':
            printData(shipName, shipVelocity)
            break
        default:
            alert('Encerrando programa de bordo...')
    }
} while (chosenOption != '4')


