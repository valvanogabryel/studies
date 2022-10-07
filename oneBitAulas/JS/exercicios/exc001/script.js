// Obtenção dos dados:
const olderPersonName = prompt('Informe o nome da pessoa mais velha: ');
const olderPersonAge = prompt('Informe a idade da pessoa mais velha: ');
const youngerPersonName = prompt('Informe o nome da pessoa mais nova: ');
const youngerPersonAge = prompt('Informe a idade da pessoa mais nova: ');
const ageDifference = olderPersonAge - youngerPersonAge;
//--------------------------------------------//
// Exibição dos dados:
const mostrarOlderName = document.getElementById('maisVelha');
const mostrarYoungerName = document.getElementById('maisNova');
const mostrarAgeDif = document.getElementById('idadeDif');

mostrarOlderName.innerText = `A pessoa mais velha se chama ${olderPersonName} e tem ${olderPersonAge} anos.`;
mostrarYoungerName.innerText = `A pessoa mais nova se chama ${youngerPersonName} e tem ${youngerPersonAge} anos.`;

if (ageDifference > 10) {
    mostrarAgeDif.innerText = `A diferença de idade é bem grande. São ${ageDifference} anos.`;
} else if (ageDifference === 0) {
    mostrarAgeDif.innerText = `Têm a mesma idade.`;

} else {
    mostrarAgeDif.innerText = `A diferença de idade é bem pequena. São ${ageDifference} anos.`;
}
