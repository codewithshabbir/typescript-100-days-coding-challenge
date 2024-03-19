// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Answer: Done

// Question 2: Personal Message: Store a person’s name in a variable and print a message to them,
// like “Hello Asharib, would you like to learn some TypeScript today?”

let myNamee:string = "Shabbir";
console.log(`Hello ${myNamee}, would you like to learn some TypeScript today?`);

// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let myFullName:string = "muHammad shAbbir";
console.log(myFullName.toLowerCase());
console.log(myFullName.toUpperCase());
console.log(myFullName.split(" ")[0][0].toUpperCase() + myFullName.split(" ")[0].slice(1).toLowerCase()
+ " " + myFullName.split(" ")[1][0].toUpperCase() + myFullName.split(" ")[1].slice(1).toLowerCase());