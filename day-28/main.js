// Question 82: Find the Length of a String: Write a function that takes a string as an argument 
// and returns the number of characters in the string.
function lengthOfAString(name) {
    var numberOfCharacters = name.length;
    return numberOfCharacters;
}
console.log(lengthOfAString("Muhammad Shabbir"));
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts 
// it to uppercase, then to lowercase, and logs both.
function convertingToUpperAndLowerCase(name) {
    console.log(name.toLowerCase());
    console.log(name.toUpperCase());
}
convertingToUpperAndLowerCase("Muhammad Shabbir");
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all 
// instances of the word "JavaScript" with "TypeScript".
function replacingTextInString(message) {
    console.log("Befor Replace:", message);
    var msgReplace = message.replace(/Javascript/g, "TypeScript");
    console.log("After Replace:", msgReplace);
    return msgReplace;
}
replacingTextInString("I love Javascript");
replacingTextInString("I love Javascript, currently i am learning Javascript");
