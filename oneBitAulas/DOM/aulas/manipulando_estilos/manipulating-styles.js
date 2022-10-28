const pToStyle = document.getElementById('style-text');

function setBlueBackground() {
    pToStyle.style.background = 'blue';
}

function setTransparentBackground() {
    pToStyle.style.background = 'transparent';
}

function setRedColor() {
    pToStyle.classList.add('red-color');
}

function removeRedColor() {
    pToStyle.classList.remove('red-color');
}