"use strict";

function testingES8(text1, text2) {
  alert("".concat(text1, "\n ").concat(text2));
}
function greetCrew(message) {
  for (var _len = arguments.length, name = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    name[_key - 1] = arguments[_key];
  }
  name.forEach(function (name) {
    console.log("".concat(message, ", ").concat(name, "!"));
  });
}
greetCrew('Seja bem-vindo', 'Arthur', 'Melissa', 'Jake', 'Robert');