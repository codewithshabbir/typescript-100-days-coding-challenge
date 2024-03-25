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
