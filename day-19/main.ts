// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list 
// where each number is twice its original value.

let numbers: number[] = [10, 15, 20, 30];

let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// Question 56: Keep Only Strings: Given a mix of different types of items, 
// make a new list that has only the words.

let mixedArr = [4, "code", 4.5, "eat", true];

let keepStrings = mixedArr.filter(mixed => typeof(mixed)  === "string");
console.log(keepStrings);

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [88, 94, 72, 99, 53, 77];

let averageGrades = grades.reduce((total, grade) => total  + grade, 0) / grades.length;
console.log(averageGrades);
