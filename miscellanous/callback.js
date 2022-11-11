let users = [
    'Adriana',
    'Marcia',
    'José'
]

function insertUser(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(name);
            let error = false;

            if (!error) {
                resolve()
            } else {
                reject({ msg: 'Erro de qualquer coisa.' })
            }
        }, 1000)
    })
}

function printUsers() {
    console.log(users)
}

insertUser('Gabryel')
    .then(printUsers)
    .catch(err => console.log(err))

printUsers()
