const shipName = prompt('Qual é a nave?')
let charToReplace = prompt('Qual letra gostaria de substituir?')
let replacerChar = prompt('Por qual letra?')
let newShipName = ''

for (let pos = 0; pos < shipName.length; pos++) {
    if (shipName[pos] == charToReplace) {
        newShipName += replacerChar
    } else {
        newShipName += shipName[pos]
    }
}

alert(newShipName)