// Question 106: Determine if a given year is a leap year using comparison operators.
function checkLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(checkLeapYear(2020));
console.log(checkLeapYear(1900));
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 
// and 3.
function isNumbDivisible(num) {
    return num % 2 === 0 && num % 3 === 0;
}
console.log(isNumbDivisible(32));
console.log(isNumbDivisible(12));
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello"));
console.log(areStringsEqualIgnoreCase("world", "Word"));
