// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number 
// and a string that represents a number (e.g., "5"). Return their sum as a number. 
function mixedNumberAndString(num1, num2) {
    return num1 + Number(num2);
}
console.log(mixedNumberAndString(10, "20"));
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and 
// returns their product. Round the result to two decimal places.
function multiplyingDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyingDecimals(0.1, 0.2));
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and 
// returns both the quotient and the remainder. Use an object to return both values.
function findingDividingAndReminder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var reminder = dividend % divisor;
    return { quotient: quotient, reminder: reminder };
}
console.log(findingDividingAndReminder(10, 3));
