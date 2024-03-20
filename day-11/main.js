// Question 31: No Users: Ensure your user list isn’t empty.
var usernames = ['admin', 'shabbir123', 'khadim213', 'burhan234', 'adil567'];
while (usernames.length) {
    usernames.pop();
}
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet users
}
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
var currentUsers = ['admin', 'shabbir123', 'khadim213', 'burhan234', 'adil567'];
var newUsers = ['admin', 'ahmed234', 'khadim453', 'burhan434', 'shabbir123'];
newUsers.forEach(function (new_user) {
    if (currentUsers.some(function (current_users) { return current_users.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(function (number) {
    var suffix = "st";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    else if (number === 4) {
        suffix = "th";
    }
    else if (number === 5) {
        suffix = "th";
    }
    else if (number === 6) {
        suffix = "th";
    }
    else if (number === 7) {
        suffix = "th";
    }
    else if (number === 8) {
        suffix = "th";
    }
    else if (number === 9) {
        suffix = "th";
    }
    console.log("".concat(number).concat(suffix));
});
