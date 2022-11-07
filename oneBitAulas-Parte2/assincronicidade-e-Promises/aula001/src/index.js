setTimeout(() => console.log('Executando após dois segundos'), 2000)


let seconds = 0;

let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando a cada 2 segundos`);
    if (seconds >= 10) clearInterval(intervalId)
}, 2000)

