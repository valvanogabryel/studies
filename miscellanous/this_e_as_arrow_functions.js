testingArrow = {
    name: 'Escola de Javascript',
    normalFunction: function () { // OBECEDE O ESCOPO DO OBJETO. THIS.NAME ESTÁ CHAMANDO O NAME DO PRÓPRIO OBJETO...
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name) // SEMPRE ESTÁ INSERIDO NO CONTEXTO DE ONDE É CHAMADA. SOMENTE 'THIS' IRIA PEGAR O OBJETO 'WINDOW'
    }
}

testingArrow.normalFunction()

testingArrow.arrowFunction()
