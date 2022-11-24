import { stdout, stdin, exit } from 'process';

stdout.write('Qual é o seu nome?');

stdin.on('data', (keyboard) => {
    stdout(`Olá, ${keyboard}`);
    exit;
});