// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, 
// model, year, and a method describe() that logs a sentence about the laptop.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "HP",
    model: "PROBOOK",
    year: "2024",
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
//  each with properties make, model, and year, use array destructuring to assign the first and second 
//  laptops to variables. Then, log these variables.
var laptops = [
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
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2]; // destructing
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different
//  sets of laptops. Use the spread operator to combine these arrays into a single array sorted in 
//  ascending order, then log the result.
var price1 = [3400, 4500, 3200];
var price2 = [2400, 2500, 2200];
console.log(__spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return a - b; })); // functions
console.log(__spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return (a - b); })); // ascending order arrow function
console.log(__spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return (b - a); })); // descending order arrow function
