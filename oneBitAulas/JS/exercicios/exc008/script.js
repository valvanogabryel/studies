function desaccelerate(velocity, printer) {
    let shipVelocity = 150;

    let newVelocity = shipVelocity - velocity


    printer(newVelocity);

    return (newVelocity)
}


desaccelerate(50, () => {
    console.log(`Estamos diminuindo: velocidade ${velocity}`)
})
