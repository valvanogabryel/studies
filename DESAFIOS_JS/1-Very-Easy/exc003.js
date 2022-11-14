function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray
}

// OU 

// function reverseArray(arr) {
//     const reversedArray = [];
//     while (arr.length) {
//         reversedArray.push(arr.pop())
//     }
//     return reversedArray;
// }

// OU 

// function reverseArray(arr) {
//     const reversedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         reversedArray[i] = arr[arr.length - i - 1];
//     }
//     return reversedArray
// }

console.log(reverseArray([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverseArray(['Oh', 'Hi', 'Mark']));
console.log(reverseArray([false, true, true, true]));
console.log(reverseArray(["It's", 'not', true, 0]));
