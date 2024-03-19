// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];
guestList.push("Adil"); // add end of an array
guestList.unshift("Burhan"); // add beginning of an array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza"); // add middle of an array
guestList.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",  would you like to join me for dinner?"));
});
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
// and you can only invite two guests.
var newGuestList = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (newGuestList.length > 2) {
    var removeGuest = newGuestList.pop();
    console.log("Sorry ".concat(removeGuest, ", I can't invite you to dinner."));
}
newGuestList.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",  You are still invited to dinner."));
});
newGuestList.splice(0, newGuestList.length);
console.log(newGuestList);
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
var worldPlaces = ["Saudia Arabia", "Dubai", "Turkey", "China", "USA"];
console.log("Orignal Order: ", worldPlaces);
console.log("Alphabetically Sort: ", __spreadArray([], worldPlaces, true).sort());
console.log("Orignal Order: ", worldPlaces);
console.log("Reverse Alphabetical Order: ", __spreadArray([], worldPlaces, true).slice().sort().reverse());
console.log("Orignal Order: ", worldPlaces);
worldPlaces.reverse();
console.log("Reverse Order: ", worldPlaces);
worldPlaces.reverse();
console.log("Orignal Order: ", worldPlaces);
worldPlaces.sort();
console.log("Sort in Alphabetical Order: ", worldPlaces);
worldPlaces.reverse();
console.log("Reverse in Alphabetical Order: ", worldPlaces);
