function desaccelerate(brake, printer) {
    let shipVelocity = 150;
    alert(`A velocidade atual é de ${shipVelocity}Km/s. Diminuindo...`)
    // Estrutura de repetição para diminuir a velocidade. Cada iteração é como se fosse 1 segundo.
    while (shipVelocity > 0) {
        shipVelocity -= brake
        if (shipVelocity < 0) {
            shipVelocity = 0
        }
        // Callback de impressão de alert
        printer(shipVelocity)
    }
}

const printVelocity = shipVelocity => {
    alert(`Diminuindo a velocidade: ${shipVelocity}Km/s`)
    if (shipVelocity == 0) {
        alert(`Espaçonave parada. Comportas abrindo.`)
    }
}

desaccelerate(20, printVelocity);
