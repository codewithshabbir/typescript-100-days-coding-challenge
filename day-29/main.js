"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence
//  of the word "code" within any given string and returns its position.
function findingThePositionOfSubstring(message) {
    return message.indexOf('code');
}
console.log(findingThePositionOfSubstring("Learn to code with JavaScript"));
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is
//  present in a given string. It should return true if found, otherwise false.
function checkingForTextPresence(message) {
    return message.includes("JavaScript");
}
console.log(checkingForTextPresence('Learn to code with JavaScript'));
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a
//  string.
function extractingSubstring(message) {
    return message.substring(0, 13);
}
console.log(extractingSubstring('Learn to code with JavaScript'));
