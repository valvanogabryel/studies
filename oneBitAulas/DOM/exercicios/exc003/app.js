class App {
    addProperty() {
        event.preventDefault();
        let kind = document.querySelector('select[name="kind"]').value;
        let area = document.querySelector('input[name="area"]').value;
        let rented = document.querySelector('input[name="rented"]').checked;
        let property = new Property(kind, area, rented);
        this.addOnPropertyList(property);
        this.cleanForm();
    }

    addOnPropertyList(property) {
        let listElement = document.createElement('li');
        let propertyInfo = `Tipo da propriedade: ${property.kind}\n | Área da propriedade: ${property.area}m²\n`;
        if (property.rented) {
            let rentedMark = this.createRentedMark();
            listElement.appendChild(rentedMark);
        }

        listElement.innerHTML += propertyInfo;

        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove);

        document.getElementById('properties').appendChild(listElement);
    }

    createRentedMark() {
        let rentedMark = document.createElement('span');
        rentedMark.innerText = 'ALUGADO\n';
        rentedMark.style.color = 'white';
        rentedMark.style.background = 'red';
        return rentedMark;
    }

    createRemoveButton() {
        let removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.innerText = 'Remover';
        removeButton.setAttribute('onclick', 'app.remove(this)')
        return removeButton
    }

    remove(btn) {
        let liToRemove = btn.parentNode;
        document.getElementById('properties').removeChild(liToRemove);
    }

    cleanForm() {
        document.querySelector('input[name="area"]').value = '';
        document.querySelector('input[name="rented"]').checked = false;
    }
}