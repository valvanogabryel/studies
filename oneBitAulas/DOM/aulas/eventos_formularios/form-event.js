function save() {
    event.preventDefault() // Previne que a página seja recarregada após a chamada do evento "submit".
    let name = document.querySelector('input[name="name"]').value;
    let programmingLang = document.querySelector('select[name="programming-lang"]').value

    alert(`Nome: ${name}\nLinguagem de programação: ${programmingLang}`)


}