function testingES8(text1, text2) {
  alert(`${text1}\n ${text2}`);
}
function greetCrew(message, ...name) {
  name.forEach(name => {
    console.log(`${message}, ${name}!`);
  });
}
greetCrew('Seja bem-vindo', 'Arthur', 'Melissa', 'Jake', 'Robert');
