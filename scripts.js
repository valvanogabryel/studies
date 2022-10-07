let spaceship = 'Falcon-9';

const isFalcon = spaceship === 'Falcon-9';

if (!isFalcon) {
    const vel = 80;
    console.log(`Your spaceship is ${spaceship}, witch has a velocity of ${vel}Km/h.`);
    console.log(vel >= 100 ? 'Yes' : 'No');
} else {
    const vel = 100;
    console.log(`Your spaceship is ${spaceship}, witch has a velocity of ${vel}Km/h`);
    console.log(vel >= 100 ? 'Yes' : 'No');
};



