// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, 
// model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
    make: "HP",
    model: "PROBOOK",
    year: "2024",
    describe(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
}
laptop.describe();

// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
//  each with properties make, model, and year, use array destructuring to assign the first and second 
//  laptops to variables. Then, log these variables.

let laptops = [
    {
        make: "HP",
        model: "PROBOOK",
        year: "2024",    
    },
    {
        make: "HP 1",
        model: "PROBOOK 1",
        year: "2025",
    },
    {
        make: "HP 2",
        model: "PROBOOK 2",
        year: "2026",
    },
]

let [laptop1, laptop2, laptop3] = laptops; // destructing

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different
//  sets of laptops. Use the spread operator to combine these arrays into a single array sorted in 
//  ascending order, then log the result.

let price1: number[] = [3400, 4500, 3200];
let price2: number[] = [2400, 2500, 2200];

console.log([...price1, ...price2].sort(function(a,b){return a-b}));    // functions
console.log([...price1, ...price2].sort((a,b) => (a-b)));    // ascending order arrow function
console.log([...price1, ...price2].sort((a,b) => (b-a)));    // descending order arrow function