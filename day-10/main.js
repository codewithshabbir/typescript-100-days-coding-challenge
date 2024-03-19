// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
var personAge = 4;
if (personAge < 2) {
    console.log("the person is a baby.");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("the person is a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("the person is a kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("the person is a teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("the person is an adult.");
}
else if (personAge >= 65) {
    console.log("the person is an elder.");
}
else {
    console.log("the person is an elder.");
}
// Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//  if statements that check for certain fruits in your array.
var favouriteFruits = ["Apple", "Mango", "Banana", "Grapes", "Pineapple"];
if (favouriteFruits.includes("Apple")) {
    console.log("You really like ".concat(favouriteFruits[0], "!"));
}
if (favouriteFruits.includes("Mango")) {
    console.log("You really like ".concat(favouriteFruits[1], "!"));
}
if (favouriteFruits.includes("Banana")) {
    console.log("You really like ".concat(favouriteFruits[2], "!"));
}
if (favouriteFruits.includes("Grapes")) {
    console.log("You really like ".concat(favouriteFruits[2], "!"));
}
if (favouriteFruits.includes("Pineapple")) {
    console.log("You really like ".concat(favouriteFruits[2], "!"));
}
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
var usernames = ['admin', 'shabbir123', 'khadim213', 'burhan234', 'adil567'];
usernames.forEach(function (users) {
    if (users == 'admin') {
        console.log("Hello ".concat(users, ", would you like to see a status report?"));
    }
    else if (users == 'shabbir123') {
        console.log("Hello ".concat(users, ", would you like to perform a some task?"));
    }
    else if (users == 'khadim213') {
        console.log("Hello ".concat(users, ", would you like to perform a some task?"));
    }
    else if (users == 'shabbir123') {
        console.log("Hello ".concat(users, ", would you like to perform a some task?"));
    }
    else if (users == 'burhan234') {
        console.log("Hello ".concat(users, ", would you like to perform a some task?"));
    }
    else if (users == 'adil567') {
        console.log("Hello ".concat(users, ", would you like to perform a some task?"));
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again."));
    }
});
