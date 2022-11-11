function doubleVelocity(velocity, printer) {
    console.log('Entrei em doubleVelocity')
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    console.log(`Estamos a ${velocity}Km/s`)
}

let newVelocity = doubleVelocity(70, printVelocity)

console.log(newVelocity)