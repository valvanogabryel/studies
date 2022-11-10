import Spaceship from "./spaceship";
import SpaceshipEngine from "./spaceship_engine";

//Ships
const sophia = new Spaceship('Sophia', 10, 5, 70);
const amsterda = new Spaceship('Amsterdã', 14, 10, 40);
const dwarfStar = new Spaceship('Estrela-Anã', 20, 4, 80);
const falcon9 = new Spaceship('Falcon-9', 20, 18, 90);

//Engines
const sophiaEngine = new SpaceshipEngine(sophia);
const amsterdaEngine = new SpaceshipEngine(amsterda);
const dwarfStarEngine = new SpaceshipEngine(dwarfStar);
const falcon9Engine = new SpaceshipEngine(falcon9);

setTimeout(() => {
    sophiaEngine.turnOn();
}, 1000)

setTimeout(() => {
    amsterdaEngine.turnOn();

}, 2000)

setTimeout(() => {
    dwarfStarEngine.turnOn();
}, 3000)

setTimeout(() => {
    falcon9Engine.turnOn();
}, 4000)

setTimeout(() => {
    console.log('Carregando informação das naves...')
    console.log('------------------------------------')
}, 5000)

setTimeout(() => {
    console.log(sophia)
    console.log(amsterda)
    console.log(dwarfStar)
    console.log(falcon9)
}, 7000)

console.log('Checando naves...')