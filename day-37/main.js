// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
var currentDate = new Date();
if (currentDate.getHours() < 12) {
    console.log("Good Morning");
}
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrades(score) {
    if (score >= 90) {
        return "Grade A";
    }
    else if (score >= 80) {
        return "Grade B";
    }
    else if (score >= 70) {
        return "Grade C";
    }
    else if (score >= 60) {
        return "Grade D";
    }
    else if (score >= 50) {
        return "Grade E";
    }
    else {
        return "Grade F";
    }
}
console.log(assignGrades(58));
console.log(assignGrades(89));
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age < 17) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(15));
console.log(categorizeAge(18));
console.log(categorizeAge(40));
