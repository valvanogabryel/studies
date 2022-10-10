const shipName = prompt('Informe o nome da nave: ');
let chooseOption = Number.parseInt(prompt('Deseja entrar na dobra espacial?\n1- Sim\n2- Não'))
let warpNum = 0
const shipShow = document.getElementById('ship')
const warpShow = document.getElementById('dobras')
while (chooseOption == 1) {
    chooseOption = Number.parseInt(prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não'))
    warpNum++
    shipShow.innerText = `Sua nave é: ${shipName}`
    warpShow.innerText = `O número de dobras foi: ${warpNum}`
}



