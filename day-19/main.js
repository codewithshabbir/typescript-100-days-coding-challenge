// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list 
// where each number is twice its original value.
var numbers = [10, 15, 20, 30];
var doubleNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubleNumbers);
// Question 56: Keep Only Strings: Given a mix of different types of items, 
// make a new list that has only the words.
var mixedArr = [4, "code", 4.5, "eat", true];
var keepStrings = mixedArr.filter(function (mixed) { return typeof (mixed) === "string"; });
console.log(keepStrings);
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [88, 94, 72, 99, 53, 77];
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrades);
