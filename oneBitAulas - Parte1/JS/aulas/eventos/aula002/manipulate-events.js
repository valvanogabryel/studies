function doChange() {
    alert(event.target.value)
}

let sampleInput = document.querySelector('input[name="sample-input"]');

sampleInput.addEventListener('change', doChange); // Adiciona a chamada do evento

let newChange = new Event('change') // Cria um novo evento com a chamada 'change'

sampleInput.dispatchEvent(newChange); // Dispara o evento acima

sampleInput.removeEventListener('change', doChange) // Remove a chamada do evento