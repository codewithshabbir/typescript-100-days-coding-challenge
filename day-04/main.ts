// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If the programs are straightforward at this point, just add your name and the current date at the top of
// each program file. Then, write one sentence describing what the program does.

//Shabbir, 17/03/2024
//This program prints a personal message
let myName:string = "Muhammad Shabbir";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

// Question 11: Names: Store the names of a few of your friends in an array called names.
// Print each person’s name by accessing each element in the list, one at a time.

let myFriendsNames:string[] = ["Khadim", "Adil", "Burhan", "Abdullah"];
for (let i = 0; i < myFriendsNames.length; i++) {
    const element = myFriendsNames[i];
    console.log(element);
}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
// print a message to them. The message should be the same for each person, but personalized with their name.

let myFriendsNames2:string[] = ["Khadim", "Adil", "Burhan", "Abdullah"];

for (let i = 0; i < myFriendsNames2.length; i++) {
    const element = myFriendsNames2[i];
    console.log(`My ${i + 1} Friend Name is ${element}`);
}
console.log("\n");
for (let name of myFriendsNames2) {
    console.log(`My Friend Name is ${name}`);
}