// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game.
// Assign 'green', 'yellow', or 'red' to a variable called alien_color.

let allienCollors: string = "green";
let allienCollors2: string = "red";

if (allienCollors == "green") {
    console.log("You just earned 5 points!");
}
else{
    // No output because the condition is false
}

if(allienCollors2 == "green"){
    // No output because the condition is false
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

let newAllienCollors: string = "green";

if (newAllienCollors == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else{
    console.log("You just earned 10 points!");
}

// Version that runs the else block:

let newAllienCollors2: string = "yellow";

if (newAllienCollors2 == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else{
    console.log("You just earned 10 points!");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let greenAlienVersion: string = "green";

if (greenAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if(greenAlienVersion == "yellow"){
    console.log("You earned 10 points!");
}
else if(greenAlienVersion == "red"){
    console.log("You earned 15 points!");
}

let yellowAlienVersion: string = "yellow";

if (yellowAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if(yellowAlienVersion == "yellow"){
    console.log("You earned 10 points!");
}
else if(yellowAlienVersion == "red"){
    console.log("You earned 15 points!");
}

let redAlienVersion: string = "red";

if (redAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if(redAlienVersion == "yellow"){
    console.log("You earned 10 points!");
}
else if(redAlienVersion == "red"){
    console.log("You earned 15 points!");
}

