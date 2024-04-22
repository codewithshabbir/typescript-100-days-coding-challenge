// Question 94: Use the .map() method to create a new array that contains the length of each word 
// from an array of words.

const fruits: string[] = ["Apple", "Mango", "Grapes"];

const arrayLength: number[] = fruits.map(arr =>  arr.length );

console.log(arrayLength);


// Question 95: Write a function that uses the .filter() method to return an array of numbers greater 
// than 10.

const num: number[]= [2,4,2,15,13,10, 29];

function filterGreaterThanTen(num: number[]): number[]{
    return num.filter(num => num >= 10);
}
console.log(filterGreaterThanTen(num));


// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers 
// in an array.

let nums: number[] = [1,2,3,4,5];

function calculateSum(num: number[]): number{
    return num.reduce((accumulator, curreentValue) => accumulator + curreentValue,0);
}

console.log(calculateSum(nums));


