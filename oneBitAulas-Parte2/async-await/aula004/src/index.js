import "core-js";
import "regenerator-runtime/runtime";

let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
};

async function adjustPosition(x, y, z) {
    if (z > 90) return Promise.reject('Angulo Z inválido para a arma');
    laserGun.currentPosition = [x, y, z];
    return [x, y, z];
};

async function fire(x, y, z) {
    laserGun.firing = true;
    return [x, y, z];
};

function loadAmmo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Arma carregada');
        }, 2000);
    });
};

async function moveAndFire(x, y, z) {
    try {
        const adjustPositionPromise = adjustPosition(x, y, z);
        const loadAmmoPromise = loadAmmo();
        let promiseResult = await Promise.all([adjustPositionPromise, loadAmmoPromise]);
        let newCoordinates = promiseResult[0];

        console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`);

        let fireCoordinates = await fire(...newCoordinates);

        console.log(`Atirando para as coordenadas (${fireCoordinates[0]}, ${fireCoordinates[1]}, ${fireCoordinates[2]})`);

    } catch (err) {
        console.log(err);
    };
};

moveAndFire(20, 40, 10);