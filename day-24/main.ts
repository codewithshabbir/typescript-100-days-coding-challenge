// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword 
// to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function printNumberWithLet(){
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumberWithLet();


// Question 71: Compare let and const: Create two examples where let allows reassignment but 
// const does not. Try to reassign a const-declared variable and catch the error.

let myName = "Muhammad Shabbir";
console.log(myName);
myName = "Shabbir";
console.log(myName);

const myAge = 23;
console.log(myAge);
try {
    myAge = 29;
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block
//  with {} that uses both let and const. Show how variables declared inside the block are not
//   accessible outside of it.

{
    let blockLet = "Let Variable Visible inside the block";
    const blockConst = "Const Variable Visible inside the block";
    console.log(blockLet);
    console.log(blockConst);
}

try {
    console.log(blockLet);
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");   
}

try {
    console.log(blockConst);
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");   
}


