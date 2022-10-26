function showInfo() {
    let name = document.querySelector('input[name="name"]').value;
    let primaryColor = document.querySelector('select[name="color"] option:checked').text;
    let likeProgramming = document.querySelector('input[name="like-programming"]:checked').value;
    let developerAreas = document.querySelectorAll('input[name="developer-options"]:checked');
    let optionsValue = [];

    developerAreas.forEach((element) => { optionsValue.push(element.value) });

    let optionsChecked = optionsValue.join(', ')

    alert(`Nome: ${name}\n Cor primária: ${primaryColor}\n Gosta de programar? ${likeProgramming}\n Áreas de desenvolvedor: ${optionsChecked}`);
}
