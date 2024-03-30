// Question 58: Average Score Calculator: Write a simple program that can take lots of scores 
// and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    console.log(scores);
    var average = scores.reduce(function (total, score) { return total + score; }, 0) / scores.length;
    return average;
}
console.log(averageScore(70, 69, 84, 98));
// Question 59: Add a Special Number: Make a program that creates custom adders. 
// These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addNumber = makeAdder(5);
console.log(addNumber(10));
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user 
// that can tell you the user's name and age.
var userProfile = (function () {
    var name = "John";
    var age = 30;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
