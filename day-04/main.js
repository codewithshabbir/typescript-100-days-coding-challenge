// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If the programs are straightforward at this point, just add your name and the current date at the top of
// each program file. Then, write one sentence describing what the program does.
//Shabbir, 17/03/2024
//This program prints a personal message
var myName = "Muhammad Shabbir";
console.log("Hello ".concat(myName, ", would you like to learn some TypeScript today?"));
// Question 11: Names: Store the names of a few of your friends in an array called names.
// Print each person’s name by accessing each element in the list, one at a time.
var myFriendsNames = ["Khadim", "Adil", "Burhan", "Abdullah"];
for (var i = 0; i < myFriendsNames.length; i++) {
    var element = myFriendsNames[i];
    console.log(element);
}
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
// print a message to them. The message should be the same for each person, but personalized with their name.
var myFriendsNames2 = ["Khadim", "Adil", "Burhan", "Abdullah"];
for (var i = 0; i < myFriendsNames2.length; i++) {
    var element = myFriendsNames2[i];
    console.log("My ".concat(i + 1, " Friend Name is ").concat(element));
}
console.log("\n");
for (var _i = 0, myFriendsNames2_1 = myFriendsNames2; _i < myFriendsNames2_1.length; _i++) {
    var name_1 = myFriendsNames2_1[_i];
    console.log("My Friend Name is ".concat(name_1));
}
