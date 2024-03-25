// Question 58: Average Score Calculator: Write a simple program that can take lots of scores 
// and find their average.

function averageScore(...scores: number[]): number{
    console.log(scores);
    let average = scores.reduce((total, score) => total + score, 0) / scores.length;
    return average;
}

console.log(averageScore(70, 69, 84, 98));

// Question 59: Add a Special Number: Make a program that creates custom adders. 
// These adders can add a specific number to any other number you give them later.


