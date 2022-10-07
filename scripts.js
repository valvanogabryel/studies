const userList =
    [
        {
            name: 'Gabryel',
            username: 'gb.'
        },
        {
            name: 'James',
            username: 'J'
        },
        {
            name: 'Claire',
            username: 'cleire'
        }
    ]

const newUser =
{
    name: 'Gabryel',
    username: 'gb.'
}

const hasUser = userList.find((user) => {
    return user.username === newUser.username
})
if (!hasUser) {
    userList.push(newUser)
}
const resultado = userList

console.log(userList)
