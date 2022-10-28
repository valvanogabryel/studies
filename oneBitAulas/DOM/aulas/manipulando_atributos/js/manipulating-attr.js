function verifyEnablement() {
    let selectedValue = document.querySelector('select').value;
    let textElement = document.getElementById('message');
    if (selectedValue == 'disabled') {
        document.querySelector('input[name="some-text"]').disabled = true;
        textElement.innerText = 'DESABILITADO';
        textElement.style.color = 'white';
        textElement.style.background = 'red';
    } else {
        document.querySelector('input[name="some-text"]').disabled = false;
        textElement.innerText = '';
        textElement.style.color = 'black';
        textElement.style.background = 'transparent';
    }

}