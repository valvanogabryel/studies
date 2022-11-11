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


//------------------------------------//


//Splice
/*
    - Significa 'emendar' ou 'costurar'
    - Substitui o array original
    - A sintaxe desse método é:
    array.splice(index[, deleteCount[, elemento1[, ...[, elementoN]]])

    -- Espera um primeiro parâmetro que é um índice do array

    -- O segundo é quantidade de elementos que queremos remover a partir deste índice

    -- Apenas o primeiro parâmetro é "Obrigatório"
*/

let spaceShipNames = ['Elemental', 'Artemis', 'Darwin', 'Supernova']

console.log(spaceShipNames)

let isRemovedSpaceships = spaceShipNames.splice(1, 2, "Deméter", "Puller", "Golias")

console.log(spaceShipNames)

console.log(isRemovedSpaceships)

//Slice
/*
    - Significa "Fatiar" ou "Dividir"
    - Extrai uma parte do array sem alterar o array original
    - A sintaxe deste método é:
    arr.slice([begin[, end]])

    -- Possui um primeiro parâmetro que é o índice principal.
    -- O segundo parâmetro é o índice final
    -- Retorna todos os elementos entre o elemento de índice "begin" e o anterior ao elemento "end".
*/

let spaceShipNames2 = ['Elemental', 'Artemis', 'Darwin', 'Supernova']

let extractedNames = spaceShipNames2.slice(1, 3)

console.log(spaceShipNames2)

console.log(extractedNames)