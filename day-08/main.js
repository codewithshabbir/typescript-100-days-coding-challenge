// Question 22: Intentional Error: Try to produce an array index error in one of your programs.
// Correct the error before finishing.
var studentsData = ["Khadim", "Shabbir", "Burhan", "Abdullah"];
console.log(studentsData[4]); // index error here
console.log(studentsData[3]); // correct this error
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
var car = "Ferrari";
console.log("Is car == 'Ferrari'? I Predict True");
console.log(car == 'Ferrari'); // True
console.log("Is car != 'BMW'? I Predict True");
console.log(car != 'BMW'); // True
console.log("Is car === 'Ferrari'? I Predict True");
console.log(car === 'Ferrari'); // True
console.log("Is car.toLowerCase() == 'ferrari'? I Predict True");
console.log(car.toLowerCase() == 'ferrari'); // True
console.log("Is car.toUpperCase() == 'ferrari'? I Predict True");
console.log(car.toUpperCase() == 'FERRARI'); // True
console.log("Is car == 'Ferrari 296 GTB'? I Predict True");
console.log(car == 'Ferrari 296 GTB'); // false
console.log("Is car != 'Ferrari'? I Predict True");
console.log(car != 'Ferrari'); // false
console.log("Is car === Ferrari? I Predict True");
console.log(car !== 'Ferrari'); // false
console.log("Is car.toLowerCase() == 'ferrari'? I Predict True");
console.log(car.toLowerCase() == 'Ferrari'); // false
console.log("Is car.toUpperCase() == 'ferrari'? I Predict True");
console.log(car.toUpperCase() == 'fERRARI'); // false
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// equality and inequality with strings
console.log("Apple" == "Apple"); // true
console.log("Apple".toLowerCase() == "Apple"); // false
// lower case
console.log("Apple".toLowerCase() == "apple"); // true
console.log("Apple".toLowerCase() != "apple"); // true
// Numerical tests
console.log("Apple" == "Apple"); // true
console.log("Apple" != "Apple"); // false
console.log(5 < 10); // true
console.log(20 < 10); // false
console.log(15 > 10); // true
console.log(2 > 10); // false
console.log(10 <= 10); // true
console.log(20 <= 10); // false
console.log(10 >= 10); // true
console.log(2 >= 10); // false
// "and" and "or" operators
console.log("Apple" === "Apple" && 5 < 10); // true
console.log("Apple" === "Apple" && 12 < 10); // false
console.log("Apple" === "Apple" || 15 < 10); // true
console.log("Apple" === "Apple".toLowerCase() || 12 < 10); // false
// item is in a array
var fruits = ["Apple", "Mango", "Banana"];
console.log("Is 'Mango' in fruits?");
console.log(fruits.includes("Mango"));
// item is not in a array
console.log("Is 'Grapes' in fruits?");
console.log(fruits.includes("Grapes"));
