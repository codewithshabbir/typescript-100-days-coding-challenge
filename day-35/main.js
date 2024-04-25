// Question 103: Write a function that returns a random boolean value, true or false.
function randomBoolean() {
    return Math.random() > 0.5;
}
console.log(randomBoolean());
// Question 104: Create a function that generates a random hexadecimal color code.
function createHexadecimalColor() {
    var colorCode = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return colorCode;
}
console.log(createHexadecimalColor());
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(diceRoll());
