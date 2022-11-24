const fs = require('fs');

fs.writeFile('test.txt', 'Olá, mundo!', err => {
    console.log(err);
}); // Cria um arquivo

fs.appendFile('test.txt', 'Olá, mundo!', err => {
    console.log(err);
}); // Adiciona um arquivo no arquivo criado

fs.rename('test.txt', 'test2.txt', err => {
    console.log(err);
}) // Renomeia o arquivo

fs.unlink('test2.txt', err => {
    console.log(err);
}) // Remove o arquivo

console.log(__dirname) // Diretório atual