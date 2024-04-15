// Question 76: Function Parameters and Return Values: Create a function that takes two numbers
//  as parameters, adds them together, and returns the result. Show how you can call this function
//   and log the result.
function addTwoValues(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sumOfTwoValues = addTwoValues(25, 5);
console.log("Sum of two numer is: ", sumOfTwoValues);
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's
//  name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetsAUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello", name);
}
greetsAUser("Muhammad Shabbir");
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and
//  declarations by creating one of each that performs the same task, such as squaring a number.
function squaringANumber(num) {
    return num * num;
}
var squaringANumberWithConst = function (num) {
    return num * num;
};
console.log(squaringANumber(4));
console.log(squaringANumberWithConst(4));
