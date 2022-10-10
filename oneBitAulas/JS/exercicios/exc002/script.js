const pilotName = prompt('Informe o seu nome, piloto: ')
let vel = 0
let velocity = parseInt(prompt('Qual a velocidade que você gostaria de acelerar a nave?'))
const conf = confirm(`Você sairá com a velocidade de ${velocity}Km/h. Tudo pronto?`)
if (conf == true) {
    if (velocity === Number && pilotName === String) {
        const printPilot = document.getElementById('pilot')
        const printVel = document.getElementById('shipVel')
        vel = velocity

        if (vel <= 0) {
            alert('A nave está parada. Considere partir e aumentar a velocidade.')
            let vel = parseInt(prompt('Qual a velocidade que você gostaria de acelerar a nave?'))
            confirm(`Você sairá com a velocidade de ${vel}Km/h. Tudo pronto?`)
            printPilot.innerText = `${pilotName}`
            printVel.innerText = `${vel}Km/h.`
        } else if (vel < 40) {
            alert('Você está devagar, podemos aumentar mais.')
            let vel = parseInt(prompt('Qual a velocidade que você gostaria de acelerar a nave?'))
            confirm(`Você sairá com a velocidade de ${vel}Km/h. Tudo pronto?`)
            printPilot.innerText = `${pilotName}`
            printVel.innerText = `${vel}Km/h.`
        } else if (vel >= 40 && vel < 80) {
            alert('Parece uma boa velociade para manter.')
            printPilot.innerText = `${pilotName}`
            printVel.innerText = `${vel}Km/h.`
        } else if (vel >= 80 && vel <= 100) {
            alert('Velocidade alta. Considere diminuir.')
            let vel = parseInt(prompt('Qual a velocidade que você gostaria de acelerar a nave?'))
            confirm(`Você sairá com a velocidade de ${vel}Km/h. Tudo pronto?`)
            printPilot.innerText = `${pilotName}`
            printVel.innerText = `${vel}Km/h.`
        } else {
            alert('Velocidade perigosa. Controle automático forçado')
            printPilot.innerText = `${pilotName}`
            printVel.innerText = `${vel}Km/h.`
        }
    } else {
        let vel = parseInt(prompt('Por favor, insira um valor coerente.'))
        confirm(`Você sairá com a velocidade de ${vel}Km/h. Tudo pronto?`)
        printPilot.innerText = `${pilotName}`
        printVel.innerText = `${vel}Km/h.`

    }
}
