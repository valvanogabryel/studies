const tags = new Set([]) // Não deixa repetir valores

tags.add('js')
tags.add('JavaScript')
tags.add('js')
tags.add('js')
tags.add('js')
tags.add('js')
tags.add('js')



const result = Array.from(tags) //converte pra um array

console.log(result)


console.log('--------------------------------------------')


const userList =
[
    {
        name: 'Gabryel',
        username: 'dan'
    },
]

const newUser = 
{
    name: 'Gabryel',
    username: 'dan'
}

const hasUser = userList.find((user) => {
    return user.username === newUser.username
})
if (!hasUser) {
    userList.push(newUser)
}
const resultado = userList

console.log(userList)