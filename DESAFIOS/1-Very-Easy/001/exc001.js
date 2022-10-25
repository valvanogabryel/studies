function average(numbers) {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number
    })

    const avg = sum / numbers.length
    return avg
}

console.log(Math.floor(average([10, 10, 9])))