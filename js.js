const userName = prompt('Insira o seu usuário no GitHub:');
const h1 = document.createElement('h1');
document.body.appendChild(h1)

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(`O nome do usuário é: ${data.name}`)
        h1.innerHTML += `O nome do usuário é: ${data.name}`
    })
    .catch((error) => {
        console.log(`Houve um erro: ${error}`)
    })

