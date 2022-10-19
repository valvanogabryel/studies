const fruits = ['Apple', 'Banana', 'Kiwi', 'Orange'];

for (i of fruits) {
    console.log(i)
}
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i == 5) {
        break
    }
}

for (let c = 0; c <= 10; c++) {
    if (c == 5) {
        continue
    }
    console.log(c)
}


