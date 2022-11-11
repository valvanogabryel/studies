/*
To Learn Before ReactJs
*/


// Nullish Coalescing Operator

const idadeNullish = 0

console.log(idadeNullish || 'Não definido')
console.log(idadeNullish ?? 'Não definido')
console.log('--------------------------------------')

// Objetos

const user = {
    name: 'Gabryel',
    idade: 19,
    address: {
        street: 'Travessa Laurinda',
        number: 124
    }
};
console.log(Object.assign(user))
console.log('--------------------------------------')

// Desestruturação

function mostraIdade({ idade }) {
    return idade;
}

console.log(mostraIdade(user))

const { address, idade: age, nickname = 'dan' } = user

console.log(JSON.stringify({ address, age, nickname }))

console.log('--------------------------------------')

// Rest Operator

const { name, idade, ...rest } = user

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, , third] = array

console.log(JSON.stringify({ first, third }))

console.log(first)
console.log(rest)

// Short Syntax
//...


