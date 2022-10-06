const userList =
    [
        {
            nome: 'Gabryel',
            username: 'gb.'
        },
        {
            nome: 'Lucas',
            username: 'Lorem'
        },
        {
            nome: 'Julianna',
            username: 'julie'
        }
    ];

userList.push({
    nome: 'Guilherme',
    username: 'GUI!'
});

const newUser = {
    nome: 'João',
    username: 'jP'
};

const hasUser = userList.find((user) => {
    return user.username === newUser.username
});

if (!hasUser) {
    userList.push(newUser)
};

console.log(userList);
