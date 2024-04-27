// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function daysOfWeek(num) {
    switch (num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Day Numbers");
            break;
    }
}
daysOfWeek(4);
// Question 116: Create a switch case that matches several cases to the same code block, representing
// seasons.
function season(num) {
    switch (num) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn / Fall");
            break;
        default:
            console.log("Invalid Day Numbers");
            break;
    }
}
season(4);
// Question 117: Implement a switch statement that evaluates an expression and uses the default
// case if none of the cases match.
function checkGrades(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grades");
            break;
    }
}
checkGrades("B");
