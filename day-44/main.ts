// Question 130: Explain how to export a function from one JavaScript file and import it into 
// another file.

import { add } from "./mathFunction";

console.log(add(2,3));

// Question 131: Create two modules; one that exports a class, and another that imports the class and 
// creates an instance.

import { Person } from "./Person";

const personName = new Person("Muhammad Shabbir");

personName.greet();

// Question 132: Discuss the difference between default and named exports in JavaScript modules.

import myName from "./myName";
console.log("Default Import My Name:", myName("Shabbir"));

import {addition, subtract, division} from "./calculator";

console.log("Naming Import addition:", addition(2, 3));
console.log("Naming Import subtract:", subtract(10, 3));
console.log("Naming Import division:", division(12, 2));
