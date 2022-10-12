let hitchedSpaceships = ['Colossus', 'Supernova', 'Helmet']

console.log(hitchedSpaceships);

//pop()

// A function '.pop()' remove o ultimo elemento de um Array. Também é possível atribuir o elemento removido dentro de uma variável.
let removedSpaceships = hitchedSpaceships.pop()

console.log(removedSpaceships)

//shift()

//Remove o primeiro elemento de um Array => [0]

hitchedSpaceships.shift()

console.log(hitchedSpaceships)

//unshift()

//Readiciona um elemento. Ou cria um elemento no primeiro índice do Array

hitchedSpaceships.unshift('Fenix')

console.log(hitchedSpaceships)

//length()



//indexOf()

//------------------------------------//
//Arrays também podem agrupar outros arrays (que também podem agrupar outros arrays).

let spaceships = [['Supernova', 10, [true, false]], ['Golias', 5, [true, false]], ['Colossus', 4, [true, false]], ['Helmet', 8, [true, false]]]

console.log(spaceships[0][2][0])
/*
vai imprimir 'true'. Ou seja, ele entra no primeiro índice do Array maior, depois no segundo índice do primeiro Array, depois no primeiro índice do último Array.
*/

console.log(spaceships[3][2][1]) //vai imprimir 'false'