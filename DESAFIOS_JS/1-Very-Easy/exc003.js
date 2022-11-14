function reverseArray(arr) {
    let output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i]);
    }
    return output
}

// OU 

// function reverseArray(arr) {
//     let output = [];
//     while (arr.length) {
//         output.push(arr.pop())
//     }
//     return output;
// }

console.log(reverseArray([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverseArray(['Oh', 'Hi', 'Mark']));
console.log(reverseArray([false, true, true, true]));
console.log(reverseArray(["It's", 'not', true, 0]));
