function showInfo() {
    let name = document.querySelector('input[name="name"]').value;
    let primaryColor = document.querySelector('select[name="color"] option:checked').text;
    let likeProgramming = document.querySelector('input[name="like-programming"]:checked').value;
    let developerOptions = document.querySelectorAll('input[name="developer-options"]:checked');
    let optionsValue = [];

    developerOptions.forEach(element => {
        optionsValue.push(element.value)
    })

    let optionsChecked = optionsValue.join(', ')
    alert(`Nome: ${name}\n Cor Primária: ${primaryColor}\n Gosta de programar? ${likeProgramming}\n Habilidades como desenvolvedor: ${optionsChecked}.`)
}