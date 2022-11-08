import Spaceship from './spaceship';
import SpaceshipEngine from './spaceshipEngine';


const sophia = new Spaceship('Sophia', 10, 5);
const amsterda = new Spaceship('Amsterdã', 14, 10);
const dwarfStar = new Spaceship('Estrela-Anã', 20, 4);

const sophiaEngine = new SpaceshipEngine(sophia);
const amsterdaEngine = new SpaceshipEngine(amsterda);
const dwarfStarEngine = new SpaceshipEngine(dwarfStar);

sophiaEngine.turnOn();
amsterdaEngine.turnOn();
dwarfStarEngine.turnOn();