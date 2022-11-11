let shipName = prompt('Digite o nome da nave: ');
let invertedShipName = ''

for (let i = shipName.length - 1; i >= 0; i--) {
    if (shipName[i] == 'e') {
        break
    }
    invertedShipName += shipName[i].toLowerCase()
}

alert(`Nome original da nave: ${shipName}.\n\n Nome após a ocultação: ${invertedShipName}`)