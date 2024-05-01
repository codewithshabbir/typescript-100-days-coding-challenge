"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into 
// another file.
Object.defineProperty(exports, "__esModule", { value: true });
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 3));
// Question 131: Create two modules; one that exports a class, and another that imports the class and 
// creates an instance.
var Person_1 = require("./Person");
var personName = new Person_1.Person("Muhammad Shabbir");
personName.greet();
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
var myName_1 = require("./myName");
console.log("Default Import My Name:", (0, myName_1.default)("Shabbir"));
var calculator_1 = require("./calculator");
console.log("Naming Import addition:", (0, calculator_1.addition)(2, 3));
console.log("Naming Import subtract:", (0, calculator_1.subtract)(10, 3));
console.log("Naming Import division:", (0, calculator_1.division)(12, 2));
