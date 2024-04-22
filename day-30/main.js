// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as 
// input and returns the number rounded to the nearest integer.
function roundingInteger(num) {
    return Math.round(num);
}
console.log(roundingInteger(4.456));
console.log(roundingInteger(4.556));
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a
//  number (like "123") and converts it into an actual number type.
function stringToNumbers(str) {
    return parseFloat(str);
}
console.log(stringToNumbers("123"));
console.log(stringToNumbers("123.123"));
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN 
// (Not a Number) and return a boolean result.
function isValueNan(num) {
    return isNaN(num);
}
console.log(isValueNan(2));
console.log(isValueNan("hello"));
