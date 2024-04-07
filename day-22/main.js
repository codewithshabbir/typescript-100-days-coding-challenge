// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
// For example, if provided with "Age: " and 30, it should give back "Age: 30".
function mergeString(text, number) {
    return text + number;
}
console.log(mergeString("My age is: ", 23));
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover 
// from dividing them using the % sign. For example, remainder(5, 2) should give 1.
function findReminder(numberOne, numberTwo) {
    return numberOne % numberTwo;
}
console.log(findReminder(5, 2));
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) 
// values. It should only say true if both are true, using the && operator. For instance, 
// checkBothTrue(true, false) should be false.
function checkBothTrue(val1, val2) {
    return val1 && val2;
}
console.log(checkBothTrue(true, false));
console.log(checkBothTrue(false, false));
