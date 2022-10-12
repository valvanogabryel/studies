//Iteração em Arrays

let hitchedSpaceships = ['Deméter', 'Darwin', 'Supernova', 'Fenix', 'Puller'];

let upcasedSpaceship = hitchedSpaceships.map(function (currentSpaceship, index) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceship)
//forEach()

hitchedSpaceships.forEach(function (currentSpaceship, index) {
    console.log(`Nave: ${currentSpaceship}\nÍndice: ${index}`)
})

//filter()

let with7Chars = hitchedSpaceships.filter(element => {
    return element.length >= 7;
})
/*Também poderia ser escrito como:

let with7Chars = hitchedSpaceships.filter(element => element.length >= 7)
*/
console.log(with7Chars)

//find()

//Semelhante ao filter(), mas somente imprimindo o PRIMEIRO ELEMENTO QUE ATENDER A FUNÇÃO
console.log(hitchedSpaceships.find(element => element.length >= 7))

//retorna o elemento em sí, não o array.