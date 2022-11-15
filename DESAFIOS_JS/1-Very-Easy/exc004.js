// function quadratic(num) {
//     const str = num.toString();
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         result += Math.pow(+str[i], 2).toString();
//     }
//     return result;
// }


// OU

function quadratic(number) {
    let numConverter = num => Number(num);
    let numbersArray = Array.from(String(number), numConverter);
    const calcOutput = [];
    let calc;

    numbersArray.forEach(num => {
        calc = Math.pow(num, 2);
        calcOutput.push(calc);
    });

    return calcOutput.toLocaleString().replaceAll(',', '');
}

// OU

// function quadratic(number) {
//     const digitString = number.toString();
//     const digitArray = digitString.split('');
//     const squaredArray = digitArray.map(number => number ** 2)
//     const squaredString = squaredArray.join('');

//     return Number(squaredString);
// }


// OU 

// function quadratic(number) {
//     const digitArray = number.toString().split('');
//     return Number(digitArray.map(number => number ** 2).join(''));
// }

console.log(quadratic(3514));
console.log(quadratic(94571));
console.log(quadratic(24));
console.log(quadratic(745821698));