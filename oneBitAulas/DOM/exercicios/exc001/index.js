function addHouse() {
    let houseArea = document.querySelector('input#house-area').value;
    let number = document.querySelector('input#number').value;
    let neighbourhood = document.querySelector('input#neighbourhood').value;
    let city = document.querySelector('input#city').value;

    let newListValue = document.createElement('li');
    newListValue.innerText = `Área: ${houseArea}m² | Número: ${number} (${neighbourhood} - ${city})`

    let removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remover'
    removeBtn.setAttribute('onclick', 'removeHouse(this)');

    newListValue.appendChild(removeBtn)

    document.getElementById('house-list').appendChild(newListValue)

    document.querySelector('input#house-area').value = '';
    document.querySelector('input#number').value = '';
    document.querySelector('input#neighbourhood').value = '';
    document.querySelector('input#city').value = '';
}

function removeHouse(btn) {
    let liToRemove = btn.parentNode
    document.getElementById('house-list').removeChild(liToRemove)
}
