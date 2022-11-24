const process = require('process');

process.stdout.write('Qual é o seu nome?');

process.stdin.on('data', (keyboard) => {
    process.stdout(`Olá, ${keyboard}`);
    process.exit;
});