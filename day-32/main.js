// Question 94: Use the .map() method to create a new array that contains the length of each word 
// from an array of words.
var fruits = ["Apple", "Mango", "Grapes"];
var arrayLength = fruits.map(function (arr) { return arr.length; });
console.log(arrayLength);
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater 
// than 10.
var num = [2, 4, 2, 15, 13, 10, 29];
function filterGreaterThanTen(num) {
    return num.filter(function (num) { return num >= 10; });
}
console.log(filterGreaterThanTen(num));
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers 
// in an array.
var nums = [1, 2, 3, 4, 5];
function calculateSum(num) {
    // return num.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue;
    // },0)
    return num.reduce(function (accumulator, curreentValue) { return accumulator + curreentValue; }, 12);
}
console.log(calculateSum(nums));
