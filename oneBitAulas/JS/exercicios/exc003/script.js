const lightYear = Number.parseInt(prompt('Digite uma distância em anos-luz: '));
const options = Number.parseInt(prompt('Para qual unidade deseja converter?\n\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros\n\n Digite uma dessas opções:'));

let chosedOption;
let convertedDistante;

switch (options) {
    case 1:
        chosedOption = 'Parsec'
        convertedDistante = lightYear * 0.306601
        break
    case 2:
        chosedOption = 'Unidade astronômica'
        convertedDistante = lightYear * 63241.1
        break
    case 3:
        chosedOption = 'Quilômetros'
        convertedDistante = lightYear * 9.5 * Math.pow(10, 12)
        break
    default:
        chosedOption = 'Unidade não identificada'
        convertedDistante = 'Conversão fora do escopo.'
};
if (options > 3) {
    alert(`Distância em anos-luz: ${lightYear}\n\n${chosedOption}\n${convertedDistante}`);
} else {
    alert(`Distância em anos-luz: ${lightYear}\n\nDistancia em ${chosedOption}: ${convertedDistante}`);
}

















