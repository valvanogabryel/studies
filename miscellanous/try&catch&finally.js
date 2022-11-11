class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier;
        this.shotsLeft = 5;
    }

    shoot() {
        if (this.shotsLeft > 0) {
            console.log('Bang!')
            this.shotsLeft -= 1
        } else {
            throw new Error(`Arma ${this.identifier} sem munição`)
        }
    }

    reload() {
        console.log('Carregando arma...')
        this.shotsLeft = 5;
        console.log(`Balas restantes: ${this.shotsLeft}`)

    }
}

const fenixWeapon = new SpaceshipWeapon(10)

try {
    console.log(fenixWeapon)
    fenixWeapon.shoot()
    console.log(fenixWeapon)
    fenixWeapon.shoot()
    console.log(fenixWeapon)
    fenixWeapon.shoot()
    console.log(fenixWeapon)
    fenixWeapon.shoot()
    console.log(fenixWeapon)
    fenixWeapon.shoot()
    console.log(fenixWeapon)
    fenixWeapon.shoot()
    console.log(fenixWeapon)
    fenixWeapon.shoot()
} catch (e) {
    console.log(e.message)
    fenixWeapon.reload()
} finally {
    console.log('Arma deu bons tiros')
}

console.log(fenixWeapon)

